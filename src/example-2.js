import concat from 'lodash/concat';
import sortBy from 'lodash/sortBy';
import map from 'lodash/map';
import sample from 'lodash/sample';

// Example: sortBy
const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 34 }
];
const exampleSortBy = sortBy(users, function(o) { return o.user; });
console.log(exampleSortBy);

// Example: map
const exampleMap = map(users, 'user');
console.log(exampleMap);

// Example: concat
const array = [1];
const exampleConcat = concat(array, 2, [3], [[4]]);
console.log(exampleConcat);

// Example: sample
const exampleSample = sample([1, 2, 3, 4]);
console.log(exampleSample);
