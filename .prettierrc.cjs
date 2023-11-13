/** @type {import("prettier").Config} */
const config = {
    trailingComma: "all",
    tabWidth: 2,
    semi: false,
    printWidth: 120,
    arrowParens: "avoid",
    importOrder: [
        "^config/(.*)$",
        "<THIRD_PARTY_MODULES>",
        "^./components/hooks/(.*)$",
        "^./components/(.*)$",
        "^./utils/(.*)$",
        "^./types/(.*)$",
        "^/public/(.*)$",
        "^[./]",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
};

module.exports = config;
