const { Readable } = require("node:stream");

if (!process.stdin) {
  process.stdin = new Readable({ read() {} });
}

if (typeof process.stdin.off !== "function") {
  const removeListener = process.stdin.removeListener?.bind(process.stdin);
  process.stdin.off = removeListener ?? (() => {});
}