// Code your solution here





function findMatching(drivers, string) {
    const result = drivers.filter(driversName => driversName.toLowerCase() === string.toLowerCase())
    return result;
}

function fuzzyMatch(drivers, string) {
    const result = drivers.filter(driversName => driversName.startsWith(string))
    return result;
}

function matchName(drivers, string) {
    const result = drivers.filter(driversName => driversName.name === string)
    return result;
}



