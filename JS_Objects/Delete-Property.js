var foo = {
  bar: 'bar'
};
delete foo.bar;

console.log('bar' in foo); // logs false, 

/**
 * Deleting is the only way to actually remove a property from an object. 
 * Setting the property to undefined or null only changes the value of a property. 
 * It does not remove the property from the object.
 */