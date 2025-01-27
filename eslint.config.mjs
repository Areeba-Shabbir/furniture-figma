import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url); // Gets the current file path
const __dirname = dirname(__filename); // Gets the current directory path

// FlatCompat is used to migrate legacy ESLint configurations to the flat config system
const compat = new FlatCompat({
  baseDirectory: __dirname, // Specifies the base directory for relative paths
});

// ESLint configuration
const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals", // Next.js recommended rules for core web vitals
    "next/typescript" // Next.js TypeScript-specific rules
  ),
];

export default eslintConfig;
