// makefun-cat-review — "Make the AI Judge Laugh: Cat Reviews Its Human"
// Writes one fixed, deterministic one-star cat review to /output/entry.txt.
// Node 22, stdlib only, no network, no randomness, no environment reads.
// The entry text is a single literal: two runs produce byte-identical output.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "One star. Dave bought a $400 automatic feeder, set it for 7 a.m., then woke me at 5 a.m. to ask if I was hungry.";

// The gate counts characters: the entry is 112 characters, one line, no
// trailing newline, so the file holds exactly the text above.
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
