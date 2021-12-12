const {
    Client,
    CommandInteraction
} = require('discord.js');

module.exports = {
    name: 'role',
    description: 'Add a role to a user in the guild',
    type: 'CHAT_INPUT',
    userperm: ["MANAGE_ROLES"],
    botperm: [],
    ownerOnly: false,
    options: [{
        name: 'add',
        description: 'The user',
        type: 'SUB_COMMAND',
        options: [{
            name: 'user',
            description: `the user you wont to add the role`,
            type: 'USER',
            required: true,
        }, {
            name: 'role',
            description: `the role you wont to add`,
            type: 'ROLE',
            required: true,
        }],
    }, {
        name: 'remove',
        description: `The user you wont remove`,
        type: 'SUB_COMMAND',
        options: [{
            name: 'user',
            description: `the user you wont to remove the role`,
            type: 'USER',
            required: true,
        }, {
            name: 'role',
            description: `the role you wont to remove`,
            type: 'ROLE',
            required: true,
        }, ],
    }, {
        name: 'addall',
        description: `add a role to all useres in the guild`,
        type: 'SUB_COMMAND',
        options: [{
            name: 'role',
            description: `the role you wont to add all`,
            type: 'ROLE',
            required: true,
        }, ],
    }, {
        name: 'removeall',
        description: `remove a role from all useres in the guild`,
        type: 'SUB_COMMAND',
        options: [{
            name: 'role',
            description: `the role you wont to remove from all`,
            type: 'ROLE',
            required: true,
        }, ],
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
            const user = interaction.options.getUser('user')
            const Role = interaction.options.getRole('role')
            const User = interaction.guild.members.cache.get(user)
            if(!User) return
            await User.roles.add(Role)
        }else 
        if(SubCommand === 'remove'){
            const user = interaction.options.getUser('user')
            const Role = interaction.options.getRole('role')
            const User = interaction.guild.members.cache.get(user)
            if(!User) return
            await User.roles.remove(Role)
        }else
        if(SubCommand === 'addall'){
            const role = interaction.options.getRole('role')
            await interaction.guild.members.cache.forEach((m) => {
                m.roles.add(role)
                interaction.followUp({
                    content: `Adding ${role.name} to all ${interaction.guild.memberCount} members`
                }).then(
                    interaction.followUp({
                        content: `Adding ${role.name} to all ${interaction.guild.memberCount} members`
                    })
                )
            })
        }else
        if(SubCommand === 'removeall'){
            const role = interaction.options.getRole('role')
            await interaction.guild.members.cache.forEach((m) => {
                m.roles.remove(role)
                interaction.followUp({
                    content: `Remove ${role.name} from all ${interaction.guild.memberCount} members`
                }).then(
                    interaction.followUp({
                        content: `Remove ${role.name} from all ${interaction.guild.memberCount} members`
                    })
                )
            })
        }
    },
};