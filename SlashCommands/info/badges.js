const {
    Client,
    CommandInteraction
} = require('discord.js');

module.exports = {
    name: 'badges',
    description: 'See what badges the user have',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: false,
    options: [{
        name: 'user',
        description: 'the user tipp search for you to see what you have',
        type: 'USER',
        required: true,
    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const User = interaction.options.getUser('user')
        const flags = User.flags.toArray();
        interaction.followUp({
            content: `${User.username}'s badges : ${flags.join(', ')}`
        })
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