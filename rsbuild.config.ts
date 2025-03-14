import { execSync } from "child_process";
import { type RsbuildPlugin, defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";
import devextreme from "./devextreme.json";

const pluginDevextreme = (): RsbuildPlugin => ({
  name: "build-themes",
  setup(api) {
    api.onBeforeCreateCompiler(() => {
      const {
        build: { commands },
      } = devextreme;

      commands.forEach((cmd) => {
        const { command, options } = cmd;
        const { inputFile, outputFile } = options;

        execSync(
          `bunx devextreme ${command} --inputFile ${inputFile} --outputFile ${outputFile}`,
          { stdio: "inherit" }
        );
      });
    });
  },
  // Asegurar que los temas se generen ANTES de procesar SASS
  post: ["rsbuild:sass"],
});

export default defineConfig({
  html: {
    template: "public/index.html",
  },
  plugins: [pluginReact(), pluginDevextreme(), pluginSass()],
});
