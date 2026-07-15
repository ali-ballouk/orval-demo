import { defineConfig } from "orval";

export default defineConfig({
  api: {
    input: "http://localhost:5122/swagger/v1/swagger.json",

    output: {
      mode: "split",

      target: "./src/app/generated/api.ts",


      schemas: "./src/app/generated/models",

      client: "axios",
    },
  },
});
