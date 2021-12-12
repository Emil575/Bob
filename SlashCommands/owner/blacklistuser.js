const {
    Client,
    CommandInteraction
} = require('discord.js');
const config = require('../../json/config.json')
module.exports = {
    name: 'blacklist',
    description: 'blacklist a user of Guild from the bot',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: true,
    options: [{
        name: 'user',
        description: `blacklist a user from the bot`,
        type: 'SUB_COMMAND',
        options: [{
            name: 'user_name',
            description: `pls enter a the user name`,
            type: 'USER',
            required: true,
        }, ],
    }, {
        name: 'guild',
        description: 'blacklist a guild from the bot',
        type: 'SUB_COMMAND',
        options: [{
            name: 'guild_id',
            description: 'pls enter the id from the guild',
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
        if(SubCommand === 'user'){
            const user = interaction.options.getUser('user_name')
            if(user.id === config.owners) return
            client.bob.push(interaction.guild.id, user.id, `BlacklistUser`)
            interaction.followUp({
                content: `Blacklist \`${user.username}\``
            })
        }else
        if(SubCommand === 'guild'){
            const guild = interaction.options.getString('guild_id')
            if(guild.id === config.SlashGuild) return
            client.bob.push(interaction.guild.id, guild.id, `BlacklistGuild`)
            interaction.followUp({
                content: `Blacklist \`${guild.name}\``
            })
        }
    },
};