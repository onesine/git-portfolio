module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    ignorePatterns: ["dist", ".eslintrc.cjs"],
    parser: "@typescript-eslint/parser",
    plugins: ["react-refresh", "prettier", "import"],
    rules: {
        semi: "error",
        "import/order": [
            "error",
            {
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true
                },
                "newlines-between": "always"
            }
        ],
        "no-console": "warn",
        "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
        "prettier/prettier": [
            "error",
            {
                singleQuote: false
            }
        ]
    }
};
