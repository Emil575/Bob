const { glob } = require("glob");
const { promisify } = require("util");
const { Client } = require("discord.js");
const config = require('../json/config.json')
const mongoose = require("mongoose");

const globPromise = promisify(glob);

/**
 * @param {Client} client
 */
module.exports = async (client) => {
    // Commands
    const commandFiles = await globPromise(`${process.cwd()}/commands/**/*.js`);
    commandFiles.map((value) => {
        const file = require(value);
        const splitted = value.split("/");
        const directory = splitted[splitted.length - 2];

        if (file.name) {
            const properties = { directory, ...file };
            client.commands.set(file.name, properties);
        }
    });

    // Events
    const eventFiles = await globPromise(`${process.cwd()}/events/*.js`);
    eventFiles.map((value) => require(value));

    // Slash Commands
    const slashCommands = await globPromise(
        `${process.cwd()}/SlashCommands/*/*.js`
    );

    const arrayOfSlashCommands = [];
    slashCommands.map((value) => {
        const file = require(value);
        if (!file?.name) return;
        client.slashCommands.set(file.name, file);

        if (["MESSAGE", "USER"].includes(file.type)) delete file.description;
        arrayOfSlashCommands.push(file);
    });
        // mongoose
        const { mongooseConnectionString } = require('../json/config.json')
        if (!mongooseConnectionString) return;
    
        mongoose.connect(mongooseConnectionString).then(() => console.log('Connected to mongodb'));

    if(config.GlobalSlashCommands === true){
        client.on('ready', async() => {
            await client.guilds.cache.forEach((g) => {
                g.commands.set(arrayOfSlashCommands)
                .then(console.log(`Slash commands set for all ${client.guilds.cache.size.toFixed()} Guilds`))
            })
            // await client.application.commands.set(arrayOfSlashCommands)
        })
        return
    }else if(config.GlobalSlashCommands === false){
        client.on("ready", async () => {
            await client.guilds.cache
                .get("838496690075729920")
                .commands.set(arrayOfSlashCommands)
                .then(console.log(`Slash commands set for only one Guild: 838496690075729920`))
        });
    }
    return
};
