import "server-only";

const dictionaries = {
  en: () =>
    import("../../../public/dictionaries/en.json").then(
      (module) => module.default
    ),
  fa: () =>
    import("../../../public/dictionaries/fa.json").then(
      (module) => module.default
    ),
};

export const getDictionary = async (locale) => dictionaries[locale]();
