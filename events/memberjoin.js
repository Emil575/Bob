const client = require("..");

client.on('guildMemberAdd', async (member) => {
    client.bob.set(member.guild.id, member.id, `LastMember`)
})
client.on('guildMemberRemove', async(member) => {
    client.bob.set(member.guild.id, member.id, `LastLeaver`)
})