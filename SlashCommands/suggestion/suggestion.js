const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require('discord.js');
module.exports = {
    name: 'suggestion',
    description: 'suggestion system',
    type: 'CHAT_INPUT',
    userperm: ['ADMINISTRATOR'],
    botperm: [],
    ownerOnly: false,
    options: [{
            name: 'channel',
            description: 'set a channel for the suggestion',
            type: 'SUB_COMMAND',
            options: [{
                name: 'channel',
                description: `channel for the suggestion`,
                type: 'CHANNEL',
                channelTypes: ['GUILD_TEXT'],
                required: true,
            }, ],
        },
        {
            name: 'suggestion',
            type: 'SUB_COMMAND',
            description: `Send a suggestion`,
            options: [{
                name: 'query',
                description: `You suggestion`,
                type: 'STRING',
                required: true,
            }, ],
        },
        {
            name: `reply`,
            description: `reply a suggestion`,
            type: 'SUB_COMMAND',
            options: [{
                name: `token`,
                description: 'Suggestion token',
                type: 'STRING',
                required: true,
            }, {
                name: `reply`,
                description: `your reply for the suggestion`,
                type: 'STRING',
                required: true,
            }, ],
        },
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [SubCommand] = args;
        if (SubCommand === 'channel') {
            const schema = require('../../models/Channel');
            const channell = interaction.options.getChannel('channel');

            schema.findOne({
                Guild: interaction.guild.id
            }, async (err, data) => {
                if (data) data.delete()
                new schema({
                    Guild: interaction.guild.id,
                    Channel: channell.id
                }).save()
                interaction.followUp({
                    content: `I have set ${channell.name} for suggestions`
                })
            })
        } else if (SubCommand === 'suggestion') {
            const suggestion = interaction.options.getString('query');
            const CodeSchema = require('../../models/Suggestion')

            const schema = require('../../models/Channel')
            schema.findOne({
                Guild: interaction.guild.id
            }, async (err, data) => {
                const pass = generatePasswort()
                const channell = interaction.guild.channels.cache.get(data.Channel)
                if (!data) return interaction.followUp({
                    content: `Suggestion channel is not set`
                })
                if (data) {
                    const embed = new MessageEmbed()
                        .setTitle(`Suggestion`)
                        .setAuthor(interaction.user.tag, interaction.user.displayAvatarURL({
                            dynamic: true
                        }))
                        .setColor('BLUE')
                        .setDescription(`**Suggestion** ${suggestion}`)
                        .addField(`Status`, 'Pending Reply...')
                        .setTimestamp()
                        .setFooter(`Suggestion Token: ${pass}`)
                    channell.send({
                        embeds: [embed]
                    }).then(m => {
                        const replyembed = new MessageEmbed()
                            .setColor('RED')
                            .setDescription(`Your [Suggestion](https://discord.com/channels/${interaction.guild.id}/${data.Channel}/${m.id}) has been send`)
                        interaction.followUp({
                            embeds: [replyembed],
                            ephemeral: true
                        })
                        m.react(`✅`)
                        m.react(`❌`)
                        new CodeSchema({
                            message: m.id,
                            token: pass,
                            suggestion: suggestion,
                            user: interaction.user.id,
                            guild: interaction.guild.id
                        }).save()
                    })
                }
            })
        } else if (SubCommand === `reply`) {
            const stoken = interaction.options.getString('token')
            const reply = interaction.options.getString('reply')
            const schema = require('../../models/Suggestion')
            schema.findOne({
                token: stoken
            }, async (err, data) => {
                if (!data) return interaction.followUp({
                    content: `Invalid token`
                })
                const message = data.message
                const user = client.users.cache.get(data.user)
                const guild = data.guild
                const suggestion = data.suggestion

                if (interaction.guild.id !== guild) return interaction.followUp({
                    content: `Invalid token`
                })
                const channelS = require('../../models/Suggestion');
                const cookie = await channelS.findOne({
                    Guild: interaction.guild.id
                })
                const channel = cookie.Channel;
                const gchannel = interaction.guild.channels.cache.get(channel)
                if (!gchannel) return interaction.followUp({
                    content: `Invalid token`
                })
                if (channel) {
                    const embed = new MessageEmbed()
                        .setAuthor(`${user.tag}`, user.displayAvatarURL({
                            dynamic: true
                        }))
                        .setTitle(`suggestion`)
                        .setColor('GREEN')
                        .setDescription(`**Suggestion:** ${suggestion}`)
                        .addField(`Status: Replied`, reply)
                        .setTimestamp()
                        .setFooter(`Suggestion token ${stoken}`)
                    gchannel.messages.fetch(message).then(editm => {
                        editm.edit({
                            embeds: [embed]
                        })
                    })
                    const newEmbed = new MessageEmbed()
                        .setColor('RED')
                        .setDescription(`[Suggestion](https://discord.com/channels/${interaction.guild.id}/${channel}/${message}) Has been Replied`)
                    interaction.followUp({
                        embeds: [newEmbed],
                        ephemeral: true
                    })
                    const userEmbed = new MessageEmbed()
                        .setColor('RED')
                        .setDescription(`[Suggestion](https://discord.com/channels/${interaction.guild.id}/${channel}/${message}) Has been Replied`)
                    user.send({
                        embeds: [userEmbed]
                    })
                }
            })
        }
    },
};

function generatePasswort() {
    var length = 12,
        charset = "qwertzuioplkjhgfdsayxcvbnmMNBVCXYASDFGHJKLPOIUZTREWQ1234567890",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal
}
/**
 * @INFO
 * Bot Coded by EmiL#8665
 * @INFO
 * Code from Reconlx
 * @INFO
 * Please mention him / Reconlx, when using this Code!
 * @INFO
 */