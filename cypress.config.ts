import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

const parabankUrl =
  process.env.PARABANK_URL ??
  "https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC";

export default defineConfig({
  e2e: {
    baseUrl: "https://parabank.parasoft.com/parabank",
    setupNodeEvents() {},
    specPattern: "cypress/e2e/**/*.tsx",
    supportFile: "cypress/e2e/support.ts",
  },
  env: {
    parabankUrl,
    username: process.env.PARABANK_USERNAME ?? "",
    password: process.env.PARABANK_PASSWORD ?? "",
  },
});
