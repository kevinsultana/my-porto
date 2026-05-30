const dictionaries = {
  id: () => import("../dictionaries/id.json").then((module) => module.default),
  en: () => import("../dictionaries/en.json").then((module) => module.default),
};

export async function getDictionary(locale) {
  const loadDictionary = dictionaries[locale] || dictionaries.id;
  return loadDictionary();
}
