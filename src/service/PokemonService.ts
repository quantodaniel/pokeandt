import { PokemonClient } from "pokenode-ts";
import { formatPokemonList } from "src/utils";

class PokemonService {
  private api: PokemonClient;

  constructor() {
    this.api = new PokemonClient();
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
