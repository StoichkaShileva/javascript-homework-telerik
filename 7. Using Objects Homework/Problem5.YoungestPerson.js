/*
 Write a function that finds the youngest person in a given array of people and prints his/her full name.
 Each person has properties firstname, lastname and age.
 Input:
 The input will consist of an array containing N * 3 values:
 N is the number of people. Values represent firstname, lastname, age,...
 Output:
 The output should consist of one line: the full name of the youngest person.
 */

function findYoungest(args) {
    var i, j, m,
        fullName,
        person,
        people = [],
        N = args.length;

    for (i = 0; i < N; i += 3) {
        person = {};
        person ['firstname'] = args[i];
        person ['lastname'] = args[i + 1];
        person ['age'] = args[i + 2];
        people.push(person);
    }

        people.sort(function(x, y){
            return x.age - y.age;
        });

   fullName = people[0].firstname + ' ' + people[0].lastname;
    return fullName;
}

// Examples:

console.log(findYoungest([
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42'
]));
// --> Gosho Petrov

console.log('-------------');

console.log(findYoungest([
    'Penka', 'Hristova', '61',
    'System', 'Failure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72'
]));
// --> Bat Man


