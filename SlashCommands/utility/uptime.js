const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'uptime',
    description: 'see the uptime from the bot',
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
        let days = Math.floor(client.uptime / 86400000);
        let hours = Math.floor(client.uptime / 3600000) % 24;
        let min = Math.floor(client.uptime / 60000) % 60;
        let sec = Math.floor(client.uptime / 1000) % 60;

        const uptimeE = new MessageEmbed()
            .setTitle(`Uptime`)
            .setColor("#2700ff")
            .setDescription(`\nDay(S) Online: ${days}\n\nHour(S) Online: ${hours}\n\nMinute(S) Online: ${min}\n\nSecond(S) Online: ${sec}`)
            .setFooter(`Requested By : ${interaction.user.username}`, interaction.user.displayAvatarURL({
                dynamic: true
            }))
        interaction.followUp({
            embeds: [uptimeE],
            ephemeral: true
        })
    },
};