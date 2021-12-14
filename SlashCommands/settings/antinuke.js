const {
    Client,
    CommandInteraction,
    MessageSelectMenu,
    MessageActionRow,
    MessageEmbed,
    MessageCollector
} = require('discord.js');

module.exports = {
    name: 'setup-antinuke',
    description: 'setup the antinuke settings',
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
        const embed = new MessageEmbed()
            .setTitle(`Pleas read the Embed and understand what the system do`)
            .setDescription(`The Antinuke system do that no bot can nuke your HOLE Server this system works with a how many channel, roles... are creat on 1 day, z.b You can only create 3 channel then you get kicked`)
            .setColor('RANDOM')
            .setFooter(`This system is a beta but it works if you have any bugs or what ever report [here]()\n Thx for Safe you server`, interaction.guild.iconURL({ dynamic: true }))
            .setTimestamp()
        const data = client.bob.get(interaction.guild.id)
        const {
            ReadAntiNuke
        } = data
        if (ReadAntiNuke.includes(interaction.user.id)) return interaction.followUp({
            embeds: [embed]
        })
        client.bob.push(interaction.guild.id, interaction.user.id, `ReadAntiNuke`)


        const step1 = new MessageEmbed()
            .setTitle(`Antinuke [1]`, client.user.displayAvatarURL())
            .setDescription(`Would you like to enable or disabled the feature? Types: \`disable\`,\`enable\``)
            .setFooter(`You can say "cancel" at any time to cancel the process`)

        const step2 = new MessageEmbed()
            .setTitle(`Antinuke [2]`, client.user.displayAvatarURL())
            .setDescription(`What should the Log channel be?`)
            .setFooter(`You can say "cancel" at any time to cancel the process`)

        let steps = [step1, step2]
        let counter = 0
        let hoisterMessage = await interaction.followUp({
            embeds: [steps[counter]]
        });
        const FinaleData = {
            Value: undefined,
            Channel: undefined
        }
        const collector = new MessageCollector(interaction.channel)

        collector.on('collect', (msg) => {
            if (msg.author.id !== interaction.user.id) return;
            if (msg.content.toLowerCase() === 'cancel') {
                collector.stop("0")
                hoisterMessage.delete().catch(() => {})
            }
            switch (counter) {
                case 0:
                    if (!["enable", 'disable'].includes(msg.content.toLowerCase())) {
                        collector.stop("1")
                        hoisterMessage.delete().catch(() => {})
                    }
                    if (msg.content.toLowerCase() === 'disable') {
                        collector.stop("4")
                        hoisterMessage.delete().catch(() => {})
                        return;
                    }
                    let val = false
                    if (msg.content.toLowerCase() === "enable") {
                        val = true
                    } else {
                        val = false
                    }

                    FinaleData['Value'] = val
                    msg.delete().catch(() => {})
                    counter++
                    hoisterMessage.edit({
                        embeds: [steps[counter]]
                    }).catch(() => {})
                    break;
                case 1:
                    let channel = msg.mentions.channels.first() || interaction.guild.channels.cache.find(c => c.id === msg.content || c.name.toLowerCase() === msg.content.toLowerCase())
                    if (!channel) {
                        collector.stop('1')
                        hoisterMessage.delete().catch(() => {})
                        return;
                    }
                    msg.delete().catch(() => {})
                    FinaleData['Channel'] = channel.id
                    hoisterMessage.delete().catch(() => {})
                    collector.stop('2')
                    break;
            }
        })

        collector.on('end', async (reason) => {
            if (reason === "0") {
                return interaction.followUp({
                    content: `• Process has been stopped!`
                })
            }
            if (reason === "1") {
                return interaction.followUp({
                    content: `• There was an error with your anwser, please make sure to follow the steps!`
                })
            }
            if (reason === "4") {
                await client.Anti_Nuke_System.set(interaction.guild.id, false, `all.enabled`)
                return interaction.followUp({
                    content: `• Antinuke have now been disabled!`
                })

            }
            if (reason === "2") {
                await client.Anti_Nuke_System.set(interaction.guild.id, false, `all.enabled`)
                await client.Anti_Nuke_System.set(interaction.guild.id, FinaleData.Channel, `all.logger`)
                return interaction.followUp({
                    content: `• Antinuke data has now been setup!`
                })
            }
        })
    },
};