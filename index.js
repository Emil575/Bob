const {
  Client,
  Message,
  MessageEmbed,
  Collection,
  Integration
} = require('discord.js');
const mongo = require('mongoose')
const colors = require('colors');
const backup = require('discord-backup')
const Enmap = require('enmap');
const fs = require('fs')
const fs2 = require('fs/promises')
const client = new Client({
  messageCacheLifetime: 60,
  fetchAllMembers: false,
  messageCacheMaxSize: 10,
  restTimeOffset: 0,
  restWsBridgetimeout: 100,
  shards: 'auto',
  allowedMentions: {
    parse: ['roles', 'users', 'everyone'],
    repliedUser: true
  },
  partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
  intents: 32767
});
module.exports = client;
// require("./events/StatusRole")(client);

client.bob = new Enmap({
  name: 'Bob',
  dataDir: './Database/bob'
});
client.settings = new Enmap({
  name: 'settings',
  dataDir: './Database/data1'
})
client.settings2 = new Enmap({
  name: 'settings2',
  dataDir: './Database/data2'
})
client.settings3 = new Enmap({
  name: 'settings3',
  dataDir: './Database/data3'
})
client.jointocreatemap = new Enmap({
  name: "settings",
  dataDir: './Database/jointocreate'
});
console.log(client.bob);

require(`./utils/joinToCreate`)(client)
mongo.connect('mongodb+srv://Emil_575:Emil_575@opal.7w458.mongodb.net/MainBot')
const config = require('./json/config.json');
const prefix = config.prefix;
const token = config.token;
// Global Variables
client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();
client.cooldowns = new Collection();
client.slashCommands = new Collection();
client.categories = fs.readdirSync('./commands/');

// Initializing the project
//Loading files, with the client variable like Command Handler, Event Handler, ...
['command'].forEach((handler) => {
  require(`./handler/${handler}`)(client);
});

client.login(token);