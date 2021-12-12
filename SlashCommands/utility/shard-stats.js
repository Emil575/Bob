const { Client, CommandInteraction } = require('discord.js');

module.exports = {
    name: 'shard-stats',
    description: 'See informations about the shards',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: true,
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const prmoise = await client.shard.broadcastEval(`[this.shard.ids[0], this.guilds.cache.size, this.guilds.cache.reduce((prev, guild) => prev + guild.memberCount, 0), this.channels.cache.size, this.uptime, process.memoryUsage().heapused]`);

        prmoise.forEach((value) => {
            finale += `\`Shard ${value[0]}:\` \n> Servers: **${value[1].toLocaleString()}** | Users: **${value[2].toLocaleString()}** | Channels: **${value[3].toLocaleString()}** | Uptime: **${moment.duration(value[4]).format("d:hh:mm:ss")}** | Memory Usage: **${formatBytes(value[5])}** \n\n`;
        })

        const embed = new MessageEmbed()
        .setColor(0x7289DA)
        .setAuthor("Shard Stats", client.user.displayAvatarURL())
        .setTimestamp()
        .setDescription(finale)
        return interaction.followUp({
            embeds: [embed]
        })

        function formatBytes(a, b) {
            if (0 == a) return "0 Bytes";
            let c = 1024;
            let d = b || 2;
            let e = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
            let f = Math.floor(Math.log(a) / Math.log(c));
            return parseFloat((a / Math.pow(c, f)).toFixed(d)) + " " + e[f];
        };
    },
};
