// Funniest Cat Voicemail Greeting — entry program.
// Writes one cat voicemail greeting (at most 120 characters, no trailing
// newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const GREETING =
  "You've reached Pickles. It's 4 a.m. and I'm screaming for food. Leave a message, I'll knock it off the shelf.";

// The gate refuses anything over 120 characters, so fail loudly here
// rather than shipping an invalid entry.
if (GREETING.length > 120) {
  throw new Error(`greeting is ${GREETING.length} characters, over the 120 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", GREETING, "utf8");
