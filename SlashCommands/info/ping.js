const { Client, CommandInteraction } = require("discord.js");

module.exports = {
    name: "ping",
    description: "returns websocket ping",
    type: 'CHAT_INPUT',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `${client.ws.ping}ms!` });
    },
};
/**
 * @INFO
 * Bot Coded by EmiL#8665
 * @INFO
 * Code from Emil Development
 * @INFO
 * Please mention him / Emil Development, when using this Code!
 * @INFO
 */
