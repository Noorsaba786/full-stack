//spread operator

const user = {
  name: "saba",
  id: 12,
};

//take a copy of its all property

const copyObj = { ...user };

// modify it while copying it

const updateObj = { ...user, country: "france", id: 154 };

console.log(updateObj);
