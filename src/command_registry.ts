import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap, commandMapb } from "./command_map.js";
import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
	return {
		help: {
			name: "help",
			description: "Displays a help message",
			callback: commandHelp,
		},
		exit: {
			name: "exit",
			description: "Exit the Pokedex",
			callback: commandExit,
		},
		map: {
			name: "map",
			description: "Print list of 20 locations; repeat the command to get the next page of 20",
			callback: commandMap,
		},
		mapb: {
			name: "mapb",
			description: "Go back to the previous page of locations",
			callback: commandMapb,
		}
		// can add more commands here
	};
}
