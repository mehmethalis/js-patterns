const user = {
  firstName: "Mehmet",
  lastName: "Cicek",
  username: "mh",
  age: 23,
  email: "halis@gmail.com",
};

const userProxy = new Proxy(user, {
  get: (target, property) => {
    return Reflect.get(target, property);
  },
  set: (target, property, value) => {
    // console.log(target, "<-T ", property, "<- P ", value, " <- V");
    if (property === "email" && !value.includes("@")) {
      throw new Error("invalid email");
    }

    console.log("success updated-------");
    return Reflect.set(target, property, value);
  },
});

console.log(userProxy.firstName);

console.log(user);
userProxy.email = "halis@halis.com";
console.log(user);
