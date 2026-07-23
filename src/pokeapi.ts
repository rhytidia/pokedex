export class PokeAPI {
	private static readonly baseURL = "https://pokeapi.co/api/v2";

	constructor() {}

	async fetchLocations(pageURL?: string | null): Promise<ShallowLocations> {
        let url: string = PokeAPI.baseURL;
		if (!pageURL) {
            url = `${url}/location-area/`;
        } else {
            url = pageURL;
        }
        const response = await fetch(url, {
            method: "GET",
		});
        if (!response.ok)  {
            throw new Error(`Request failed: ${response.status} ${response.statusText}`);
        }
        return await response.json();

	}

	async fetchLocation(locationName: string): Promise<Location> {
		throw new Error("Not implemented yet");
	}
}

export type ShallowLocations = {
	next: string | null;
    previous: string | null;
    results: {name: string, url: string}[];
};

export type Location = {
	// add properties here
};
