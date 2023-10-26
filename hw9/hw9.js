/*Write a function wich recieves an array of elements and returns an object of your current town of residence with specific keys set in the array and values you put in them
['name', 'area', 'population', 'main street', 'mayor\'s name']
*/

function getTownOfResidence(arr){
   const currentTown = {};
      arr.forEach(function(key, i) {
         currentTown[arr[i]] = prompt(`Enter: ${arr[i]}`);
      });
      return currentTown;
}

const arrayGiven = ['name', 'area', 'population', 'main street', 'mayor\'s name'];

getTownOfResidence(arrayGiven);