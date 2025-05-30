import { spawn } from "child_process";
import fs from "fs";
import { LOG_FILE } from "./constants";
import { RunCommand } from "./interfaces";

fs.writeFileSync(LOG_FILE, "", { encoding: "utf-8" });

function writeLog(message: string) {
  const timestamp = new Date().toISOString();
  const logLine = `[${timestamp}] ${message}\n`;
  fs.appendFileSync(LOG_FILE, logLine, { encoding: "utf-8" });
}

function run({ label, command, args = [] }: RunCommand): Promise<void> {
  return new Promise((resolve, reject) => {
    console.log(`\n\x1b[34m[${label.toUpperCase()}]\x1b[0m`);
    writeLog(`\n[${label}]`);

    const proc = spawn(command, args, { shell: true });

    proc.stdout?.on("data", (data) => {
      const output = data.toString().trim();
      console.log(output);
      writeLog(output);
    });

    proc.stderr?.on("data", (data) => {
      const output = data.toString().trim();
      console.error(output);
      writeLog(output);
    });

    proc.on("error", (err) => {
      const errorMsg = `Error executing "${command}": ${err.message}`;
      console.error(errorMsg);
      writeLog(errorMsg);
      reject(err);
    });

    proc.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Process exited with code ${code}`));
      }
    });
  });
}

async function main() {
  try {
    if (process.env.EXPO_TOKEN) {
      await run({
        label: "Authenticating user",
        command: "eas whoami",
      });
    } else {
      const warning = "⚠️  EXPO_TOKEN not defined. User not authenticated.";
      console.warn(`\n${warning}`);
      writeLog(warning);
    }

    await run({
      label: "Android SDK Version",
      command: "sdkmanager --version",
    });

    await run({
      label: "Android NDK Version",
      command: `${process.env.ANDROID_NDK_HOME}/ndk-build --version`,
    });

    await run({
      label: "Java Version",
      command: "java -version",
    });

    await run({
      label: "EAS CLI Version",
      command: "eas --version",
    });

    await run({
      label: "Node Version",
      command: "node --version",
    });

    await run({
      label: "Yarn Version",
      command: "yarn --version",
    });

    await run({
      label: "NPM Version",
      command: "npm --version",
    });

    await run({
      label: "Bun Version",
      command: "bun --version",
    });

    await run({
      label: "Install Dependencies",
      command: "npm install --force",
    });

    const profile = process.env.PROFILE;

    if (!profile) {
      console.error("⚠️  PROFILE not defined.");
      process.exit(1);
    } else {
      await run({
        label: "Profile",
        command: "echo",
        args: [profile],
      });

      await run({
        label: "Build Android",
        command: "eas",
        args: ["build", "-p", "android", "--profile", profile, "--local"],
      });
    }
  } catch (error) {
    console.error("Error during execution:", error);
    process.exit(1);
  }
}

main();