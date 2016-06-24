/*
 Write a function that groups an array of people by age, first or last name.
 The function must return an associative array, with keys - the groups, and values - arrays with people in these groups.
 Use function overloading (i.e. just one function).
 */

function group(people, prop) {
    var person,
        map = {},
        values = [];
    switch (prop) {
        case 'firstname':
        {
            for (person in people) {
                map['firstname'] = values;
                values.push(people[person].firstname);
            }
        }
            break;
        case 'lastname':
        {
            for (person in people) {
                map['lastname'] = values;
                values.push(people[person].lastname);
            }
        }
            break;
        case 'age':
        {
            for (person in people) {
                map['age'] = values;
                values.push(people[person].age);
            }
        }
            break;
    }
    console.log(map);
}

// Example:

var people = [
    {firstname: 'Gosho', lastname: 'Petrov', age: 32},
    {firstname: 'Peter', lastname: 'Peterson', age: 16},
    {firstname: 'Bay', lastname: 'Ivan', age: 81}
];
var groupedByFname = group(people, 'firstname');
var groupedByLname = group(people, 'lastname');
var groupedByAge = group(people, 'age');