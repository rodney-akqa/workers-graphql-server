const { RESTDataSource } = require('apollo-datasource-rest')

class PokemonAPI extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://pokeapi.co/api/v2/'
  }

  async getPokemon(id) {
    const pokemon = await this.get(`pokemon/${id}`);
    
    pokemon.threadId = uuid ?? ''; // Replace 'value' with the actual value you want to add

    return pokemon;
  }
}

module.exports = PokemonAPI
