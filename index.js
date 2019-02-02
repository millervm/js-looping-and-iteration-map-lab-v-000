// Code your solution in this file.
<<<<<<< HEAD
function lowerCaseDrivers(drivers) {
    return drivers.map(function(driver) {return driver.toLowerCase();
    });
}

function nameToAttributes(drivers) {
    return drivers.map(function(driver) {
        const newDriver = {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]};
        return newDriver;
    });
}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver) {return `${driver.name} is from ${driver.hometown}`;
    });
}
=======
function lowerCaseDrivers(drivers ) {
  return drivers.map(function(driver) {return driver.toLowerCase(); });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {return '${driver.name} is from ${driver.hometown}';});
}
>>>>>>> 90b3960948293dabc7541c4b1baf670e8974faf8
