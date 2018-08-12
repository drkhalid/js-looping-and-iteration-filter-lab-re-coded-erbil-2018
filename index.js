// Code your solution in this file
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list,name){
  return list.filter(function(driverName){
    return driverName.slice(0,name.length) === name
  })
  
}

function matchName(lsit,prop){
  return list.filter(function(driverProp){
    return driverProp.name === prop
  })
}