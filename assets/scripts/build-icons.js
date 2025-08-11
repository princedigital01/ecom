// scripts/build-icons.js
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const RAW_DIR = path.resolve(__dirname, "../icons-raw");
const OUT_DIR = path.resolve(__dirname, "../src/icon");
const INDEX_FILE = path.resolve(__dirname, "../src/index.js");

function toPascalCase(name) {
  return name
    .replace(/(^\w|-\w)/g, (match) => match.replace("-", "").toUpperCase())
    .replace(".svg", "");
}

function generateIndexFile(iconNames) {
  const content = iconNames
    .map((name) => {
      const componentName = toPascalCase(name);
      return `export { default as ${componentName} } from './icons/${componentName}';`;
    })
    .join("\n");

  fs.writeFileSync(INDEX_FILE, content, "utf-8");
  console.log("✅ index.js generated");
}

function buildIcons() {
  console.log("⚙️  Converting SVGs to React components...");

  execSync(
  `npx @svgr/cli ${RAW_DIR} --out-dir ${OUT_DIR} --icon --ext jsx --template assets/scripts/svgr-template.js`,
  { stdio: "inherit" }
);

  const icons = fs
    .readdirSync(RAW_DIR)
    .filter((file) => file.endsWith(".svg"));

  generateIndexFile(icons);
}

buildIcons();
