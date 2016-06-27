/*
 Write a method that asks the user for his name and prints Hello, <name>!. Write a program to test this method.
 Input:  On the first line you will receive a name.
 Output:  Print Hello, <name>!
 */

function sayHello(name) {
    name = String(name);
    var greet = 'Hello, ',
        exclam = '!';

    console.log(greet + name + exclam);
}

sayHello(['Peter']);