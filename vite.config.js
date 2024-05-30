import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import eslint from "vite-plugin-eslint";

const ReactCompilerConfig = {
  // compilationMode: "annotation",
  // // sorces: "",
};

export default defineConfig(() => {
  return {
    plugins: [
      react({
        babel: {
          plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
        },
      }),
    ],
  };
});
