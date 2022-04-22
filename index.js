// Code your solution here
/*

findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. 
The function should be case insensitive.

fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, 
and returns all drivers whose names begin with the provided letters.

matchName - This function takes an array of driver objects and a string as arguments. 
Each driver object has two properties: name and hometown. 
The function should return each element whose name property matches the provided string argument.


*/

function findMatching(drivers, arg) {
    return drivers.filter(
      (match) => 
      match.toLowerCase() === arg.toLowerCase()
    );
  }


  function fuzzyMatch(drivers, arg) {
    return drivers.filter(
      (match) =>
      match.toLowerCase().indexOf(arg.toLowerCase()) === 0
    );
  }
  
  function matchName(drivers, name) {  // 'name'can be driver name or hometown 
    return drivers.filter(
        (record) =>
         record.name === name
        );
  }