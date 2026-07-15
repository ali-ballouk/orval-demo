import { defineConfig } from "orval";

export default defineConfig({
    api: {
        input: "http://localhost:5122/swagger/v1/swagger.json",

        output: {
            target: "./src/generated/api.ts",

            client: "axios",

            prettier: true,
        },
    },
});