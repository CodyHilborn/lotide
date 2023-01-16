const assertEqual = require('../assertEqual');
const tail = require('../tail');


const result = [2, 3, 4, 5];
assertEqual(tail(result)[0], 3);
assertEqual(tail(result)[2], 5);
assertEqual(tail(result)[1], 3);