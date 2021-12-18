const { Client, CommandInteraction, MessageSelectMenu, MessageActionRow, InteractionCollector, MessageComponentInteraction, } = require('discord.js');

module.exports = {
    name: 'NOUSE',
    description: 'test',
    type: 'CHAT_INPUT',
    userperm: [],
    botperm: [],
    ownerOnly: true,
    options: [{
        name: 'main-settings',
        description: 'set the main settings for antinuke',
        type: 'SUB_COMMAND',
    },
    {
        name: 'antibot',
        type: 'SUB_COMMAND',
        description: `Manage the settings for antibot`,
        options: [{
            name: 'enable',
            description: `You suggestion`,
            type: 'BOOLEAN',
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
        const [Subcmd] = args;
        if(Subcmd === 'main-settings'){
            const Selection = new MessageSelectMenu()
            .addOptions(
                {
                    value: 'enable',
                    label: 'Enable',
                    description: 'Enable the Module'
                },
                {
                    value: 'disable',
                    label: 'Disable',
                    description: 'Disable the Module'
                }
            )
            .setMaxValues(1)
            .setMinValues(1)
            const row = new MessageActionRow().addComponents(Selection)
            let HostMessage = await interaction.followUp({
                components: [row],
                content: `Select here`
            })
            const collector = new InteractionCollector(client, {
                componentType: 'SELECT_MENU',
                channel: interaction.channel,
                guild: interaction.guild.id,
            })
            collector.on('collect', async(msg) => {
                if(msg.user.id !== interaction.user.id) return
            })
        }
    },
};
