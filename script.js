 
var Pokedex = require('pokedex-promise-v2')
var P = new Pokedex();
P.getPokemonByName('eevee') // with Promise
.then((response) => {
    const eevee = new Pokemon(response.name, response.types[0].type.name, response.stats[0].base_stat, [response.moves.name]);
})
.catch(function(error) {
    console.log('There was an ERROR: ', error);
});
P.getPokemonByName('charmander')
.then((response) => {
 const charmander = new Pokemon(response.name, response.types[0].type.name, response.stats[0].base_stat, response.moves[0].move.name)
})
class Pokemon {
    constructor(name,type, hitPoints, moves){
        this.name = name
        this.type = type
        this.hitPoints = hitPoints
        this.moves = moves
    }
    isAlive() {
        if (this.hitPoints <= 0) {
            console.log(`${this.name} has been defeated!`)
            return false
        }
        return true
    }
    attack(opponent) {
        console.log(`${this.name} hit ${opponent.name} for ${this.abilityOne}`)
    }
}

