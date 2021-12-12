const { Client, CommandInteraction } = require('discord.js');
const { Snake } = require('weky')
module.exports = {
    name: 'snake',
    type: 'CHAT_INPUT',
    description: 'Play snake',
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        await Snake({
            message: interaction,
            embed: {
                title: 'Snake Game',
                description: `GG, your score is **{{score}}**`,
                color: 'GREEN',
                footer: interaction.user.username,
                timestamp: true
            },
            emojis: {
                empty: '⬛',
                snakeBody: '🐸',
                food: '🎃',
                up: '🔼',
                down: '🔽',
                left: '◀',
                right: '▶'
            },
            othersMessage: 'No!',
            buttonText: 'Kein bock mehr'
        })
    },
};
