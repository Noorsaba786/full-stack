//Exercise 4:
/* Create two objects user1 and user2. Merge them into one object using the spread operator.
 */

const user1 = {
  name: "saba",
  id: 12,
};

const user2 = {
  country: "afg",
  city: "kabul",
};

const mergeObj = { ...user1, ...user2 };

console.log(mergeObj);
