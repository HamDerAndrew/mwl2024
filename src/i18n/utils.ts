import { ui } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  console.log(lang)
  if (lang in ui) return lang as keyof typeof ui;
  return "en"
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key) {
    return ui[lang][key];
  }
}