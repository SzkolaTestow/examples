const users = [
  { id: 1, name: "Jon Snow", city: "Castle Black" },
  { id: 2, name: "Daenerys Targaryen", city: "Meereen" },
];

const getUser = (callback) => {
  setTimeout(() => callback(users[0]), 2000);
};

const getUserForId = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((user) => user.id === id);
      if (!user) {
        reject(`No user found for id: ${id}`);
      }
      resolve(user);
    }, 2000);
  });
};

module.exports = { getUser, getUserForId };
