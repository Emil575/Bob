const chalk = require('chalk');
const client = require('../index');

process.on('unhandledRejection', (error) => {
  console.error(chalk.red.bold('unhandledRejection => ', error));
  client.users.cache
    .get('623345279390973982')
    .send({ content: `unhandledRejection => ``\`\`\`${error}\`\`\`` });
});
process.on('uncaughtException', (error) => {
  console.error(chalk.red.bold('uncaughtException => ', error));
  client.users.cache
    .get('623345279390973982')
    .send({ content: `uncaughtException => ``\`\`\`${error}\`\`\`` });
});
process.on('exit', (error) => {
  console.error(chalk.red.bold('Exit code => ', error));
  client.users.cache
    .get('623345279390973982')
    .send({ content: `Exit code => ``\`\`\`${error}\`\`\`` });
});
process.on('multipleResolves', (error) => {
  console.error(chalk.red.bold('multipleResolves => ', error));
  client.users.cache
    .get('623345279390973982')
    .send({ content: `multipleResolves => ``\`\`\`${error}\`\`\`` });
});
