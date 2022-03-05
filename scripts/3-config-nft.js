import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x3200C65e96d63f79395f4c9c28c09e6C49F8186a",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "AndLaw Logo",
        description: "This NFT will give you access to ADAO!",
        image: readFileSync("scripts/assets/andlaw_logo.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()