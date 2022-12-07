import { PokemonClient } from "pokenode-ts";
import { formatPokemonList } from "src/utils";

class PokemonService {
  private api: PokemonClient;

  constructor() {
    this.api = new PokemonClient();
  }

  public async listPokemons() {
    const response = await this.api.listPokemons(0, 1200);
    return formatPokemonList(response.results);
  }
}

export default PokemonService;
