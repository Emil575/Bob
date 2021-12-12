const { Client, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'shards',
    description: 'see how many Shards',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: false,
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        interaction.followUp({
            content: `Shard id for ${interaction.guild.name}, Shard #${interaction.guild.shardId}`
        })
    },
};
