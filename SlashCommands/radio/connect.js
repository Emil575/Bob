const { Message, MessageActionRow, MessageSelectMenu } = require('discord.js');
const {
    joinVoiceChannel,
    createAudioPlayer,
    createAudioResource
} = require('@discordjs/voice')
const { Client, CommandInteraction } = require('discord.js');
const radioAssets = require('../../json/radio.json')

module.exports = {
    name: 'connect',
    description: 'lisen to radio',
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
        const channel = interaction.member.voice.channel

		if (!channel) {
			return message.reply({
				content: 'You might need to join a voice channel to do this!',
			});
		}

		// Get the radio meta from the json file that has been declared
		const getRadioChannel = radioAssets.channel.map((rad) => ({
			// Then, re-formatted to label and value mapped object
			label: rad.nativeName,
			value: rad.name,
		}));

		// Make some select menus..
		const radioMenu = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId('radioList')
				.setPlaceholder('Select a radio channel!')
				// Set it as the options, so the user can choose.
				.addOptions(getRadioChannel),
		);

		const msg = await interaction.reply({
			content: 'Please select one of the Radio channel that are listed below!',
			components: [radioMenu],
		});

		// Make some filter..
		const filter = (interaction) => {
			if (
				interaction.user.id !== message.author.id ||
				interaction.customId !== 'radioList'
			) {
				interaction.reply({
					content: 'This menu is not for you!',
					ephemeral: true,
				});
				return false;
			} else {
				return true;
			}
		};

		// Collectors..
		const collector = msg.createMessageComponentCollector({
			filter,
			time: 30000,
		});
		collector.on('collect', async (interaction) => {
			// Find a radio name that match to the value that we set up before.
			const findRadio = radioAssets.channel.find(
				(rad) => rad.name === interaction.values.toString(),
			);

			const player = createAudioPlayer();
			// If we got the radio correctly, then get the radio uri.
			const resource = createAudioResource(findRadio.uri);

			// Make it connect to the voice channel
			let connection = joinVoiceChannel({
				guildId: message.guild.id,
				channelId: channel.id,
				adapterCreator: message.guild.voiceAdapterCreator,
				selfDeaf: true,
				selfMute: false,
			});

			// And this should play the audio
			player.play(resource);
			connection.subscribe(player);

			// You can remove this, but msg "This interaction failed" should appeared, so if you keep this, that msg shouldn't appear
			await interaction.reply({
				content: 'Radio has started successfully!',
				ephemeral: true,
			});

			// And you are done.
			await interaction
				.reply({
					content: `Started playing **${findRadio.nativeName}** in <#${channel.id}>`,
				})
				// Make the bot set suppressed to false if the initial command being used in stage channel
				// KNOWN BUG: if the bot moved to stage channel it does not make the suppress to false.
				.then((msg) => msg.guild.me.voice.setSuppressed(false))
				// Error known because the user are not in a stage channel
				// "You are only allowed to do this in stage channels"
				.catch((err) => console.err(err));
		});
    },
};
/**
 * @INFO
 * Bot Coded by EmiL#8665
 * @INFO
 * Code from Reconlx
 * @INFO
 * Please mention him / Reconlx, when using this Code!
 * @INFO
 */