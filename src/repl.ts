import type { State } from "./state.js";
import { getCommands } from "./command_registry.js"

export function startREPL(state: State): void {
	state.readline.prompt()
	state.readline.on('line', (input) => {
		const cleaned = cleanInput(input);
		if (cleaned.length === 0) {
			state.readline.prompt();
			return;
		} else {
			const registry = state.commands;
			const command = cleaned[0];
			if (command in registry) {
				try {
					registry[command].callback(state);
				} catch (error) {
					console.error(error);
				}
			} else {
				console.log("Unknown command. Try 'help' for a list of commands.");
			}
			state.readline.prompt();
		}
	});
}

export function cleanInput(input: string): string[] {
	const lowerCase: string = input.toLowerCase();
	return lowerCase
		.trim()
		.split(/\s+/)
		.filter((word) => word !== "");
}

// string.split(/\s+/) will split based on any number of whitespaces using regex,
// and create an array of strings w/o whitespaces
// string.trim() will remove leading and trailing whitespaces
// last filter check is for empty strings (e.g. in an empty string input)
