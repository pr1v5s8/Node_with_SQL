const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'users_db',
    password: 'Pktanwar@123',
});

let q = `SHOW TABLES`;
try{
    connection.query(q, (err, result) => {
        if(err) throw err;
        console.log(result);
    });
} catch(err){
    console.log(err);
}

connection.end();

let getRandomUser = () => {
    return {
      id: faker.string.uuid(),
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }
