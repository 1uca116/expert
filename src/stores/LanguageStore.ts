import { makeAutoObservable, runInAction } from 'mobx';

import messagesEnglish from '../assets/lang/en.json';
import messagesRussian from '../assets/lang/ru.json';
import messagesSerbian from '../assets/lang/srb.json';

const storageKey = 'nft-marketplace.language';

export type Language = {
  id: string;
  text: string;
};

export const availableLanguages: Language[] = [
  {
    id: 'en',
    text: 'English',
  },
  {
    id: 'ru',
    text: 'Russian',
  },
  {
    id: 'srb',
    text: 'Serbian',
  },
];

export class LanguageStore {
  constructor() {
    makeAutoObservable(this);
  }

  initialized: boolean = false;
  language: Language = { id: 'en', text: 'English ' };

  init() {
    const languageFromStore = getLanguageFromStore();
    this.setLanguage(languageFromStore);

    runInAction(() => {
      this.initialized = true;
    });
  }

  setLanguage(language: Language) {
    if (this.language.id === language.id) {
      return;
    }

    runInAction(() => {
      this.language = language;
    });

    setLanguageInStore(language);
  }

  get availableLanguages() {
    return availableLanguages;
  }

  get messages() {
    switch (this.language.id) {
      case 'en':
        return messagesEnglish;
      case 'ru':
        return messagesRussian;
      case 'srb':
        return messagesSerbian;
      default:
        return messagesEnglish;
    }
  }
}

function getLanguageFromStore() {
  const lang = localStorage.getItem(storageKey);

  if (!lang) {
    const browserLanguage = detectBrowserLanguage();

    setLanguageInStore(browserLanguage);

    return browserLanguage;
  }

  return availableLanguages.find((x) => x.id === lang) ?? availableLanguages[0];
}

function setLanguageInStore(language: Language) {
  localStorage.setItem(storageKey, language.id);
}

function detectBrowserLanguage() {
  if (!navigator.languages || navigator.languages.length === 0) {
    return availableLanguages[0];
  }

  const userPreference = navigator.languages.find((x) =>
    availableLanguages.find((y) => x.includes(y.id.toString()))
  );

  if (!userPreference) {
    return availableLanguages[0];
  }

  return (
    availableLanguages.find((x) => userPreference.includes(x.id.toString())) ??
    availableLanguages[0]
  );
}
