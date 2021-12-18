const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'blacklist-word',
    description: 'blacklist a word',
    type: 'CHAT_INPUT',
    userperm: ['MANAGE_MESSAGES'],
    botperm: [],
    ownerOnly: false,
    options: [{
        name: 'add',
        description: 'add a word',
        type: 'SUB_COMMAND',
        options: [{
            name: 'word',
            description: 'enter the word',
            type: 'STRING',
            required: true,
        }, ],
    }, {
        name: 'remove',
        description: 'Remove the word',
        type: 'SUB_COMMAND',
        options: [{
            name: 'word',
            description: 'enter the word',
            type: 'STRING',
            required: true,
        }, ],
    }, {
        name: 'display',
        description: 'display all thw words',
        type: 'SUB_COMMAND',
    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [SubCommand] = args;
        if(SubCommand === 'add'){
            const word = interaction.options.getString('word')
            client.bob.push(interaction.guild.id, word, `BlacklistedWords`)
            interaction.followUp({
                content: `Add ${word} as a blacklisted word!`
            })
        }else
        if(SubCommand === 'remove'){
            const word = interaction.options.getString('word')
            if(!client.bob.get(interaction.guild.id, `BlacklistedWords`).includes(word))
            return interaction.followUp({
                content: `${word} is not in the db`
            })
            client.bob.remove(interaction.guild.id, word, `BlacklistedWords`)
            interaction.followUp({
                content: `Remove ${word} from blacklisted words`
            })
        }else
        if(SubCommand === 'display'){
            const data = client.bob.get(interaction.guild.id, `BlacklistedWords`)
            if(!data) return
            interaction.followUp({
                    content: `No word added`
            })
            const embed = new MessageEmbed()
            .setTitle(`Blacklisted words in ${interaction.guild.name}`)
            .setDescription(data.join('\n '))
            interaction.followUp({
                embeds: [embed]
            })
        }
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