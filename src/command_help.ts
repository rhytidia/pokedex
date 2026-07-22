
import type { State } from "./state.js";

export function commandHelp(state: State): void {
    console.log(`Welcome to the Pokedex!\nUsage:\n`);
    for (const command in state.commands) {
        const commandObj = state.commands[command];
        console.log(`${commandObj.name}: ${commandObj.description}`);
    }
    console.log();
}
