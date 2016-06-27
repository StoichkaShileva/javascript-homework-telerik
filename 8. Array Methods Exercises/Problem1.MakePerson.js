/*
 Write a function for creating persons.
 Each person must have firstname, lastname, age and gender (true is female, false is male)
 Generate an array with ten person with different names, ages and genders
 */

var person,
    peopleArray = [],
    personIvan = createPerson('Ivan', 'Ivanov', 34, false),
    personMaya = createPerson('Maya', 'Stoyanova', 46, true),
    personPesho = createPerson('Peter', 'Petrov', 17, false),
    personJohn = createPerson('John', 'Brown', 39, false),
    personRaya = createPerson('Raya', 'Emilova', 16, true),
    personIEmilia = createPerson('Emilia', 'Zravkova', 30, true),
    personAna = createPerson('Ana', 'Angelova', 24, true),
    personAngel = createPerson('Angel', 'Pashunov', 27, false),
    personIvaylo = createPerson('Ivaylo', 'Iliev', 33, false),
    personMaria = createPerson('Maria', 'Slavkova', 22, true);

function createPerson(fname, lname, age, gender) {
    person = {
        firstname: fname,
        lastname: lname,
        age: age,
        isFemale: gender
    };
    return person;
}

peopleArray.push(personIvan, personMaya, personPesho, personJohn, personRaya,
    personIEmilia, personAna, personAngel, personIvaylo, personMaria);
console.log(peopleArray);

