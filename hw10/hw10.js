/**Write a function-constructor ConstructCity which recieves city characteristics and creates objects of ConstructCity
 */

function ConstructCity(name, country, footballLeague, footballClub){
    this.name = name;
    this.country = country;
    this.footballLeague = footballLeague;
    this.footballClub = footballClub;
}

let liverpool = new ConstructCity('liverpool', 'United Kingdom', 'APL', 'Liverpool');
let valencia = new ConstructCity('Valencia', 'Spain', 'La Liga', 'Valencia');

console.log(liverpool);
console.log(valencia);