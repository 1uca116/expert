import { observer, useLocalObservable } from 'mobx-react-lite';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { IntlProvider } from 'react-intl';
import { LanguageStore } from '../stores/LanguageStore';

type BaseStores = {
  language: LanguageStore;
};

const baseStoreContext = createContext<BaseStores>({} as BaseStores);

export const ProvideBaseStores = observer(({ children }: any) => {
  const [initialized, setInitialized] = useState(false);
  const languageStore = useLocalObservable(() => new LanguageStore());

  const stores = useMemo(
    () => ({
      language: languageStore,
    }),
    [languageStore]
  );

  useEffect(() => {
    const init = async () => {
      languageStore.init();

      // await Promise.all([staticDataStore.init(), walletStore.init()]);
      // await marketplaceStore.init();

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
