const { Users } = require('./src/models/users');
const { Roles } = require('./src/models/roles');

const roleMocks = ['read', 'write'];
const userMocks = [
  { login: 'user1', password: 'pass1' },
  { login: 'user2', password: 'pass2' },
];
const createRoles = async () => {
  const roles = await Roles.find();

  if (!roles.length) {
    roleMocks.forEach(async name => {
      const role = new Roles({ name });
      await role.save();
    })
  }
};
const createUsers = async () => {
  const users = await Users.find();

  if (!users.length) {
    userMocks.forEach(async userData => {
      const user = new Users(userData);
      await user.save();
      console.log('New user created.')
    })
  }
};

const onAppStart = async () => {
  try {
    createRoles();
    createUsers();
  } catch (error) {
    console.log('---> on start Error: ');
    console.log(error)
  }
};

module.exports = { onAppStart };
