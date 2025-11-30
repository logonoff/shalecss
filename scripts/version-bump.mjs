import { readFileSync, writeFileSync } from "fs";

// Take the monorepo version and propagate it to all workspaces

const currentVersion = JSON.parse(
    readFileSync("./package.json", "utf-8")
).version;

for (const workspace of ["core", "react", "website"]) {
    let manifest = JSON.parse(
        readFileSync(`./workspaces/${workspace}/package.json`, "utf-8")
    );

    manifest.version = currentVersion;

    writeFileSync(
        `./workspaces/${workspace}/package.json`,
        JSON.stringify(manifest, null, 2) + "\n",
        "utf-8"
    );
}
