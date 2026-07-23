
import type { State } from "./state.js";

export async function commandHelp(state: State): Promise<void> {
    console.log(`Welcome to the Pokedex!\nUsage:\n`);
    for (const command in state.commands) {
        const commandObj = state.commands[command];
        console.log(`${commandObj.name}: ${commandObj.description}`);
    }
    console.log();
}
