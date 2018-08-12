// Code your solution in this file
function findMatching (list, name) {
  return list.filter(function (driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list,name){
  return list.filter(function(driverName){
    return driverName[0] + driverName[1] === name[0] + name[1]
  })
  
}

function matchName(lsit,prop){
  return list.filter(function(driverProp){
    return list.name === prop
  })
}