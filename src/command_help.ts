import type { CLICommand } from "./command.js";

export function commandHelp(commands: Record<string, CLICommand>): void {
    console.log(`Welcome to the Pokedex!\nUsage:\n`);
    for (const command in commands) {
        const commandObj = commands[command];
        console.log(`${commandObj.name}: ${commandObj.description}`);
    }
    console.log();
}
