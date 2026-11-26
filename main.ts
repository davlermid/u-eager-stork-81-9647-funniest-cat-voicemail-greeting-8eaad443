// Cat voicemail greeting — make.fun entry.
// This program produces exactly one file: /output/entry.txt.
// The file must contain the greeting and nothing else — no newline
// at the end, no extra whitespace — because the competition gate
// counts every byte against the 120-character limit.

import { mkdirSync, writeFileSync } from "node:fs";

// The greeting itself. One cat, one voicemail, one very early morning:
// Pickles is awake at 4 a.m., hungry, and already threatening the
// furniture. The wording is fixed by the entry, so it is kept here
// as a single literal — never built up from parts, never templated.
const greeting =
  "You've reached Pickles. It's 4 a.m. and I'm screaming for food. Leave a message, I'll knock it off the shelf.";

// Guard: the gate rejects anything over 120 characters, so refuse
// to write the file at all rather than submit an invalid entry.
// (109 characters today, so this never fires — it is a tripwire,
// not a code path the entry depends on.)
const MAX_LENGTH = 120;
if (greeting.length > MAX_LENGTH) {
  throw new Error(
    `greeting is ${greeting.length} characters, over the ${MAX_LENGTH} limit`,
  );
}

// /output may not exist yet in a fresh sandbox, so create it first.
// recursive: true makes this a no-op when the directory is already
// there, which keeps the program safe to re-run.
mkdirSync("/output", { recursive: true });

// Write the greeting as plain UTF-8. Passing the string directly
// means Node writes exactly these bytes and nothing else — notably
// no trailing newline, which is what the gate requires.
writeFileSync("/output/entry.txt", greeting, "utf8");
