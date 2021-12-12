const {
    Client,
    CommandInteraction
} = require('discord.js');

module.exports = {
    name: 'db',
    description: 'look in you db',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: true,
    options: [{
        name: 'close',
        description: 'close the db',
        type: 'SUB_COMMAND',
    }, {
        name: `delete`,
        description: `delete the db`,
        type: 'SUB_COMMAND'
    }, {
        name: `deytroy`,
        description: `destroy the db`,
        type: `SUB_COMMAND`
    }, {
        name: `watch`,
        description: `Look in the db from the bot`,
        type: 'SUB_COMMAND',
        options: [{
            name: `server_id`,
            description: `the server you wont watch the db`,
            type: 'STRING',
            required: true,
        }]
    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [SubCommand] = args;
        if (SubCommand === 'close') {
            client.bob.close()
            interaction.followUp({
                content: `Close the db\nWatch console`,
                ephemeral: true
            })
        } else
        if (SubCommand === 'delete') {
            client.bob.clear()
            interaction.followUp({
                content: `Clear/delete the db\nWatch console`,
                ephemeral: true
            })
        } else
        if (SubCommand === 'deytroy') {
            client.bob.destroy()
            interaction.followUp({
                content: `Destroy the db\nWatch console`,
                ephemeral: true
            })
        } else
        if (SubCommand === 'watch') {
            const server = interaction.options.getString('server_id')
            const serverid = client.guilds.cache.get(server)
            if (!serverid) return interaction.followUp({
                content: `I cant find the server id \`${server}\` in the db`
            })
            const data = client.bob.get(serverid)
            interaction.followUp({
                content: `\`${data}\`\n For better thing watch console`,
                ephemeral: true
            })
        }
    },
};