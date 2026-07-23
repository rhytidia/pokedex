import { createInterface, type Interface } from "readline";
import { getCommands } from "./command_registry.js";
import { PokeAPI } from "./pokeapi.js";

export type State = {
    readline: Interface;
    commands: Record<string, CLICommand>;
    pokeAPI: PokeAPI;
    nextLocationsURL: string | null;
    prevLocationsURL: string | null;
}
export type CLICommand = {
	name: string;
	description: string;
	callback: (state: State) => Promise<void>;
};

export function initState(): State {
    const rl: Interface = createInterface({
			input: process.stdin,
			output: process.stdout,
			prompt: "Pokedex > ",
		});
    return { 
        readline: rl, 
        commands: getCommands() ,
        pokeAPI: new PokeAPI(),
        nextLocationsURL: null,
        prevLocationsURL: null,
    };
}