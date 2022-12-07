import { PokemonClient } from "pokenode-ts";
import { formatPokemonList } from "src/utils";

const DAY_IN_MS = 1000 * 60 * 60 * 24;

class PokemonService {
  private api: PokemonClient;

  constructor() {
    this.api = new PokemonClient({
      cacheOptions: { maxAge: DAY_IN_MS },
    });
  }

  public async listPokemons() {
    const res = await this.api.listPokemons(0, 1200);
    return formatPokemonList(res.results);
  }

  public async getPokemonByName(name: string) {
    return await this.api.getPokemonByName(name); 
  }
}

export default PokemonService;
