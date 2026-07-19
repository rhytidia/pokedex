import { createInterface } from "readline";

export function startREPL(): void {
	const rl = createInterface ({
		input: process.stdin,
		output: process.stdout,
		prompt: "Pokedex > "
	})

	rl.prompt()
	rl.on('line', (input) => {
		const cleaned = cleanInput(input);
		if (cleaned.length === 0) {
			rl.prompt();
			return;
		} else {
			console.log(`Your command was: ${cleaned[0]}`);
			rl.prompt();
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
