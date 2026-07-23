import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
    await fetchDisplayLocations(state, state.nextLocationsURL);
}

export async function commandMapb(state: State): Promise<void> {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return;
    } else {
        await fetchDisplayLocations(state, state.prevLocationsURL);
    }
}

export async function fetchDisplayLocations(state: State, url: string | null): Promise<void> {
    const response = await state.pokeAPI.fetchLocations(url);
    for (const resp of response.results) {
			console.log(resp.name);
		}
    state.nextLocationsURL = response.next;
    state.prevLocationsURL = response.previous;
}


/*const response = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
    for (const resp of response.results) {
        console.log(resp.name);
    }
    state.nextLocationsURL = response.next;
    state.prevLocationsURL = response.previous;*/