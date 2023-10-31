/**Write a function-constructor ConstructCity which recieves city characteristics and creates objects of ConstructCity
 */

function ConstructCity(name, country, footballClub){
    this.name = name;
    this.country = country;
    this.footballClub = footballClub;
}

let liverpool = new ConstructCity('liverpool', 'United Kingdom', 'Liverpool');
let valencia = new ConstructCity('Valencia', 'Spain', 'Valencia');

console.log(liverpool);
console.log(valencia);