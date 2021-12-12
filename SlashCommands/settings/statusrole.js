const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require('discord.js');

module.exports = {
    name: 'statusrole',
    description: 'Set the role and the link',
    type: 'CHAT_INPUT',
    userperm: ['ADMINISTRATOR'],
    botperm: [],
    ownerOnly: false,
    options: [{
            name: 'status_role',
            description: 'set the role for status role in this guild',
            type: 'ROLE',
            required: true,
        },
        {
            name: 'status_text',
            description: 'set the text for status role in this guild',
            type: 'STRING',
            required: true,
        }
    ],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const role = interaction.options.getRole('status_role');
        const text = interaction.options.getString('status_text');
        if (!role)
            interaction.followUp({
                content: `Pls make sure that the role is on the Guild`,
                ephemeral: true
            });
        client.bob.set(interaction.guild.id, role.id, `Status.Role`);
        client.bob.set(interaction.guild.id, link, `Status.Text`);
        const embed = new MessageEmbed()
            .setTitle(`✅ setup statusrole`)
            .setDescription(`The status module is now enable in ${interaction.guild.name}\n **__ROLE__**>> \`${role.name}\`\n **__TEXT__**>> \`${text}\``)
            .setTimestamp();
        interaction.followUp({
            embeds: [embed]
        });
    },
};