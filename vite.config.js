import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";

const ReactCompilerConfig = {
  compilationMode: "annotation",
};

export default defineConfig(() => {
  return {
    plugins: [
      // eslint({
      //   failOnError: false,
      // }),
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
        },
      }),
    ],
  };
});
