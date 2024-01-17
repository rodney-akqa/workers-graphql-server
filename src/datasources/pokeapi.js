const { RESTDataSource } = require('apollo-datasource-rest')

class PokemonAPI extends RESTDataSource {
  
  constructor(uuid) {
    super()
    this.uuid = uuid;
    this.baseURL = 'https://pokeapi.co/api/v2/'
  }

  async getPokemon(id) {
    const pokemon = await this.get(`pokemon/${id}`);
    
    pokemon.threadId = this.uuid ?? '';

    return pokemon;
  }
}

module.exports = PokemonAPI
