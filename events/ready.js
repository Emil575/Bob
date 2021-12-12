const client = require("../index");
const config = require('../json/config.json')

client.on("ready", () => {
    console.log(`${client.user.tag} is up and ready to go!`)
})
