#!/usr/bin/env bun
import * as p from "@clack/prompts";

async function main() {
  p.intro("Welcome to Sitrep CLI");

  const action = await p.select({
    message: "What would you like to do?",
    options: [
      { value: "status", label: "Check status" },
      { value: "report", label: "Generate report" },
      { value: "config", label: "Configure settings" },
    ],
  });

  if (p.isCancel(action)) {
    p.cancel("Operation cancelled.");
    process.exit(0);
  }

  switch (action) {
    case "status":
      const s = p.spinner();
      s.start("Checking status...");
      await new Promise((r) => setTimeout(r, 1000));
      s.stop("Status: All systems operational");
      break;

    case "report":
      const name = await p.text({
        message: "Enter report name:",
        placeholder: "my-report",
        validate: (value) => {
          if (!value) return "Report name is required";
        },
      });

      if (p.isCancel(name)) {
        p.cancel("Operation cancelled.");
        process.exit(0);
      }

      p.log.success(`Report "${name}" created!`);
      break;

    case "config":
      p.log.info("Configuration coming soon...");
      break;
  }

  p.outro("Thanks for using Sitrep CLI!");
}

main().catch(console.error);
