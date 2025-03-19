import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { rule } from "postcss";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = {
  ...compat.extends("next/core-web-vitals", "next/typescript"),
<<<<<<< HEAD
  rules: {"no-unused-vars": "off",},
=======
  rules: {
    "no-unused-vars": "off",
  },
>>>>>>> c8f0a6c (vercel dep update)
};

export default eslintConfig;

