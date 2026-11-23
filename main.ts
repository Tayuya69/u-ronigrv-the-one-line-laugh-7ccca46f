import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Line Laugh — one funny line, a single sentence, 83 characters.
// Everyday truth: houseplants die of neglect. Surprise at the end: the
// replacement is fake, yet the guilt — and the watering — carries on.
const LINE =
  "My plants died of neglect, so I bought fake ones and now I water them out of guilt.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

// Post-write read-back verification: re-read the file we just wrote and
// assert it is exactly the expected line and within the 1-200 code point
// gate, so a truncated or corrupted write fails loudly instead of
// silently shipping a bad entry.
import { readFileSync } from "node:fs";

const written = readFileSync(join(outDir, "entry.txt"), "utf8");
const codePoints = [...written].length;
if (written !== LINE) {
  throw new Error("entry.txt does not match the expected line");
}
if (codePoints < 1 || codePoints > 200) {
  throw new Error(`entry.txt is ${codePoints} code points, outside 1-200`);
}
