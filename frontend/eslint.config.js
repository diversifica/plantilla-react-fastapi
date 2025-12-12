import js from "@eslint/js";
import pluginReact from "eslint-plugin-react-hooks";
import pluginReactRefresh from "eslint-plugin-react-refresh";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"];
    ignores: ["dist", "node_modules"],
    plugins: {
      "react-hooks": pluginReact,
      "react-refresh": pluginReactRefresh,
    },
    rules: {
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
];