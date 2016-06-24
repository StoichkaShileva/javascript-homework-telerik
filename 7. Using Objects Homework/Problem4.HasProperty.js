/*
 Write a function that checks if a given object contains a given property.
 */

function hasProperty(obj, prop) {
    var i,
        hasProp;
    for (i in obj) {
        if (i === prop) {
            hasProp = true;
            break;
        }
        hasProp = false;
    }
    console.log(hasProp);
}

// Examples:
var obj = {
    length: 5,
    width: 16
};
var obj2 = {
    depth: 5,
    width: 16
};
hasProperty(obj, 'length');
hasProperty(obj2, 'length');