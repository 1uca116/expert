import { observer, useLocalObservable } from 'mobx-react-lite';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LanguageStore } from '../stores/LanguageStore';
import { LayoutStore } from '../stores/LayoutStore';

type BaseStores = {
  language: LanguageStore;
  layout: LayoutStore;
};

const baseStoreContext = createContext<BaseStores>({} as BaseStores);

export const ProvideBaseStores = observer(({ children }: any) => {
  const [initialized, setInitialized] = useState(false);
  const languageStore = useLocalObservable(() => new LanguageStore());
  const layoutStore = useLocalObservable(() => new LayoutStore());

  const stores = useMemo(
    () => ({
      language: languageStore,
      layout: layoutStore,
    }),
    [languageStore, layoutStore]
  );

  useEffect(() => {
    const init = async () => {
      languageStore.init();

      setInitialized(true);
    };

    init();
  }, [languageStore]);

  if (!initialized) {
    return null;
  }

  return (
    <baseStoreContext.Provider value={stores}>
      <IntlProvider
        defaultLocale={languageStore.language.id}
        locale={languageStore.language.id}
        messages={languageStore.messages}
      >
        {children}
      </IntlProvider>
    </baseStoreContext.Provider>
  );
});

export const useLanguage = () => {
  const { language } = useContext(baseStoreContext);

  return language;
};

export const useLayout = () => {
  const { layout } = useContext(baseStoreContext);

  return layout;
};
