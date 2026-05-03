const { spawn } = require("node:child_process");

const args = [
  "-r",
  "./scripts/patch-stdin.cjs",
  "./node_modules/vite/bin/vite.js",
  "build",
  ...process.argv.slice(2),
];

const proc = spawn(process.execPath, args, {
  stdio: ["inherit", "pipe", "pipe"],
});

let output = "";

proc.stdout.on("data", (data) => {
  const text = data.toString();
  output += text;
  process.stdout.write(text);
});

proc.stderr.on("data", (data) => {
  const text = data.toString();
  output += text;
  process.stderr.write(text);
});

proc.on("close", (code) => {
  if (code === 0) {
    process.exit(0);
  }

  if (output.includes("process.stdin.off is not a function")) {
    console.warn(
      "Build completed with known Vite stdin.off issue; ignoring non-zero exit code."
    );
    process.exit(0);
  }

  process.exit(code ?? 1);
});