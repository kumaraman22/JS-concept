//Map is a collection that stores key-value pairs. It allows the use of various data types as keys and maintains the order of its entries

// create a map using "new Map()"

let map = new Map();
map.set('key1', 'value1');
map.set('key2', 'value2');

console.log(map.get('key1'));


//A Set in JavaScript is a collection of unique values. Unlike an array, each element can only occur once in a Set.

let set = new Set();
set.add('apple');
set.add('banana');
set.add('apple'); // Duplicate: will not be added

console.log(set.size);


//****In addition to Map and Set, JavaScript also provides WeakMap and WeakSet, which manage memory differently by allowing their elements to be garbage-collected.  */