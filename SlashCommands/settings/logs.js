const {
    Client,
    CommandInteraction
} = require('discord.js');

module.exports = {
    name: 'logs',
    description: 'Set the logs',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: false,
    options: [{
        name: 'enable',
        description: 'enable the db',
        type: 'SUB_COMMAND',
        options: [{
            name: 'channel',
            description: `The log channel`,
            type: 'CHANNEL',
            channelTypes: ['GUILD_TEXT'],
            required: true,
        }, ],
    }, {
        name: `disable`,
        description: `Disable the logs`,
        type: 'SUB_COMMAND'
    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [SubCommand] = args;
        if(SubCommand === 'enable'){
            const channel = interaction.options.getChannel('channel')
            let webhoookid
            let webhoookToken
            try {
                channel.createWebhook(interaction.guild.name, {
                    avatar: interaction.guild.iconURL({ format: 'png' })
                })
                .then(webhoook => {
                    webhoookid = webhoook.id,
                    webhoookToken = webhoook.token
                })
            } catch (error) {
                return confirm.log(error)
            }
            client.bob.set(interaction.guild.id, webhoookid, 'Logs.WebHookId')
            client.bob.set(interaction.guild.id, webhoookToken, 'Logs.WebHookToken')
            client.bob.set(interaction.guild.id, channel.id, `Logs.Channel`)
            interaction.followUp({
                content: `I set the log channel to ${channel.name}`,
                ephemeral: false
            })
        }else 
        if(SubCommand === 'disable'){
            client.bob.remove(interaction.guild.id, `Logs.Channel`)
            interaction.followUp({
                content: `I disable the logs`
            })
        }
    },
};