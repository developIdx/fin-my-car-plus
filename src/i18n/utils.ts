import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getAlternateUrl(url: URL, targetLang: string) {
  const currentLang = getLangFromUrl(url);
  const pathname = url.pathname;
  
  if (currentLang === defaultLang) {
    // Currently on default lang (no prefix), add prefix for target
    if (targetLang === defaultLang) return pathname;
    return `/${targetLang}${pathname}`;
  } else {
    // Currently on prefixed lang
    const pathWithoutLang = pathname.replace(`/${currentLang}`, '') || '/';
    if (targetLang === defaultLang) return pathWithoutLang;
    return `/${targetLang}${pathWithoutLang}`;
  }
}
