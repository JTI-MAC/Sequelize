const Sequelize = require('sequelize');

const sequelize = new Sequelize('sequelize', 'root', 'toor', {
  dialect: 'postgres'
});

async function myFunction() {
  await sequelize.authenticate();
  console.log("Connection successfull!")
}

myFunction();
sequelize.authenticate().then(() => {
  console.log("Connection successful!");
}).catch((err) => {
  console.log("Error connecting to data base!");
});

console.log("Another task.");