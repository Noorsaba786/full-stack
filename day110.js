// Nested objects

const user = {
  name: "saba",
  age: 21,
  address: {
    city: "kabul",
    country: "afghanistan",
  },
};

const {
  name,
  age,
  address: { city, country },
} = user;

console.log(name);
console.log(city);
console.log(country);
