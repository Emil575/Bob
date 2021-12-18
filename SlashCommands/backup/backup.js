const {
    Client,
    CommandInteraction,
    MessageEmbed
} = require('discord.js');
const backup = require('discord-backup');
module.exports = {
    name: 'backup',
    description: 'create/load/list backups in your Guild',
    type: 'CHAT_INPUT',
    userperm: ["ADMINISTRATOR"],
    botperm: [],
    ownerOnly: false,
    options: [{
        name: 'create',
        description: 'create a backup',
        type: 'SUB_COMMAND',
    }, {
        name: 'load',
        description: 'Load the backup',
        type: 'SUB_COMMAND',
        options: [
            {
                name: 'backup_id',
                description: 'the backup id for load the backup',
                type: 'STRING',
                required: true,
            }
        ]
    }, {
        name: 'list',
        description: 'list all backups in your Guild',
        type: 'SUB_COMMAND',
        options: [
            {
                name: 'backup_id',
                description: 'the backup id for load the backup',
                type: 'STRING',
                required: true,
            }
        ]
    }],
    /**
     *
     * @param {Client} client
     * @param {CommandInteraction} interaction
     * @param {String[]} args
     */
    run: async (client, interaction, args) => {
        const [SubCommand] = args;
        if(SubCommand === 'create'){
            backup.create(interaction.guild.id, {
                jsonBeautify: true
            }).then((backupData) => {
                interaction.user.send({
                    content: `The backup has been created! To load it, make a slash command with \`backup-load\` with the id \`${backupData.id}\``
                })
                interaction.followUp({
                    content: `Backup successfully created. Back up id sended in your DMs! Let my role be at the highest for the command to run properly`
                })
            })
        }else 
        if(SubCommand === 'load'){
            const backup_id = interaction.options.getString('backup_id')
            backup.fetch(backup_id).then(async () => {
                interaction.followUp({
                    content: `:warning: | When the backup is loaded, all the channels, roles, etc. will be replaced! Type \`!confirm\` to confirm! Let my role be at the highest for the command to run properly`,
                    ephemeral: false
                })
                await interaction.channel.awaitMessages(m => (m.author.id === interaction.user.id) && (m.content === `!confirm`), {
                    max: 1,
                    time: 20000,
                    errors: ["time"]
                }).catch((err) => {
                    return interaction.followUp({
                        content: `Time is out`
                    })
                })
                interaction.user.send({
                    content: `Start loading the backup`
                })
                backup.load(backup_id, interaction.guild).then(() => {
                    backup.remove(backup_id)
                }).catch((err) => {
                    return
                })
            }).catch((err) => {
                interaction.followUp({
                    content: 'no backup found'
                })
            })
        }else
        if(SubCommand === 'list'){
            const backup_id = interaction.options.getString('backup_id')
            backup.fetch(backup_id).then((backupInfos) => {
                const date = new Date(backupInfos.data.createdTimestamp);
                const yyyy = date.getFullYear().toString(), mm = (date.getMonth() + 1).toString(), dd = date.getDate().toString();
                const formatedDate = `${yyyy}/${(mm[1] ? mm : "0" + mm[0])}/${(dd[1] ? dd : "0" + dd[0])}`;
                let embed = new MessageEmbed()
                .setAuthor("Backup Informations")
                .addField('Backup ID:', backupInfos.id, false)
                .addField(`Server ID:`, backupInfos.data.guildID, false)
                .addField('Size:', `${backupInfos.size} Kb`, false)
                .addField("Created at", formatedDate, false)
                .setColor("#FF0000");
                interaction.followUp({
                    embeds: [embed]
                })
            }).catch((err) => {
                return interaction.followUp({
                    content: `No backup found`
                })
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