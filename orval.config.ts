import { defineConfig } from "orval";
import "dotenv/config";
const baseUrl = process.env.EXPO_PUBLIC_BASE_URL!;
export default defineConfig({
  api: {
    input: {
      target: `${baseUrl}/api-json`,
    },
    output: {
      target: "./src/api/generated",
      schemas: "./src/api/generated/model",
      client: "react-query",
      mode: "split",
      clean: true,
      httpClient: "axios",
      override: {
        mutator: {
          path: "./src/api/axios.ts",
          name: "customAxios",
        },
      },
    },
  },
});
