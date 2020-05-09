
/* install dep
 1. npm init -y
 2. yarn 
 3. yarn add express
 4. package.json "server": "nodemon index.js"
 5.  yarn add nodemon --dev
 6. yarn add helmet --save
 7. (optional) cors: yarn add cors
 8. (intalls knex sqlite3) yarn add knex sqlite3
 9. yarn add knex-cleaner
*/

//? s1 
const server = require('./server.js');

//? s2
const port = process.env.PORT || 8000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));