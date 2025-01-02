const findTheOldest = function(people = []) {
    const newArr = people.sort((firstPerson, secondPerson) => {

        if (!firstPerson["yearOfDeath"]) {
            firstPerson["yearOfDeath"] = new Date().getFullYear();
        } else if (!secondPerson["yearOfDeath"]) {
            secondPerson["yearOfDeath"] = new Date().getFullYear();
        }
        const firstAge = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
        const secondAge = secondPerson.yearOfDeath - secondPerson.yearOfBirth;

        return secondAge - firstAge;
    }).filter(person => person["yearOfDeath"]);

    console.table(newArr);
    return newArr[0];
};

// Do not edit below this line
module.exports = findTheOldest;
