<div style="text-align: left;">
# 📜 Project Setup & Linting Configurations
[Setup ESLint and Prettier for React Project with TypeScript](https://yogendrakumarvr.com/post/setup-eslint-and-prettier-for-react-project-with-typescript)

## 🛠️ ESLint Setup for React Hooks

This project uses the **`eslint-plugin-react-hooks`** &**`vite-plugin-eslint`** package to enforce best practices and prevent common issues when working with React Hooks. The plugin has been added to the Vite development server configuration to ensure that any issues with hook usage are immediately visible during development.

### ⚡️ Runtime Error Reporting

In the `vite.config.ts` file, the ESLint plugin is included in the `plugins` array. This means that **errors and warnings** related to React hooks will be shown in real time in the browser console during development. 🖥️

#### 🚨 Key Configuration

The plugin will treat issues like **unused variables** as errors. To prevent the dev server from treating unused variables as errors, follow these steps:

1. **Modify ESLint Rules**: To make unused variable warnings less strict, update the rule in your `.eslintrc.js` or `.eslintrc.json` file:

```json
"@typescript-eslint/no-unused-vars": ["warn"]
```
