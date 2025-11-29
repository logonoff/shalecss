/**
 * @fileoverview Generates the banner SCSS file with the current version.
 */

import { readFileSync, writeFileSync } from "fs";

const main = () => {
  const { version } = JSON.parse(readFileSync("./package.json", "utf-8"));
  const banner = `
/*!
 * shale.css v${version} (MIT)
 * https://github.com/logonoff/shalecss
 */
`.trimStart();

  writeFileSync("./scss/_banner.scss", banner, "utf-8");
};

main();
