// Code your solution in this file
function findMatching (list, name) {
  return list.drivers(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(){
  return list.filter
  
}