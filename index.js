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
  name: 'Settings',
  dataDir: './Database/data1'
})
client.settings2 = new Enmap({
  name: 'Settings2',
  dataDir: './Database/data2'
})
client.settings3 = new Enmap({
  name: 'Settings3',
  dataDir: './Database/data3'
})
client.jointocreatemap = new Enmap({
  name: "Settings",
  dataDir: './Database/jointocreate'
});
client.Anti_Nuke_System = new Enmap({
  name: "Antinuke",
  dataDir: './Database/antinuke'
})
client.setups = new Enmap({
  name: 'setups',
  dataDir: './Database/setups'
})
client.points = new Enmap({ 
  name: "points", 
  dataDir: "./Database/ranking"
}); 

require(`./utils/joinToCreate`)(client)
const config = require('./json/config.json');
mongo.connect(config.mongooseConnectionString)
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
/**
 * @INFO
 * Bot Coded by EmiL#8665
 * @INFO
 * Code from Emil Development
 * @INFO
 * Please mention him / Emil Development, when using this Code!
 * @INFO
 */