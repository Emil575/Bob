const Client = require("..");

function randomNumber(min, max) {
    min = Math.ceil(min);
    max: Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

Client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    let msg = message.content;

    let emojis = msg.match(/(?<=:)([^:\s]+)(?=:)/g)
    if (!emojis) return;
    emojis.forEach(m => {
        let emoji = Client.emojis.cache.find(x => x.name === m)
        if (emoji) return;
        let temp = emoji.toString();
        if (new RegExp(temp, "g").test(msg)) msg = msg.replace(new RegExp(temp, "g"), emoji.toString())
        else msg = msg.replace(new RegExp(":" + m + ":", "g"), emoji.toString())
    })
    if (msg === message.content) return;
    let webhook = await message.channel.fetchWebhooks();
    let number = randomNumber(1, 2);
    webhook = webhook.find(x => x.name === 'nqn' + number);

    if (!webhook) {
        webhook = await message.channel.createWebhook(`nqn` + number, {
            avatar: Client.user.displayAvatarURL({
                dynamic: true
            })
        })
    }
    await webhook.edit({
        name: message.member.nickname ? message.member.nickname : message.author.username,
        avatar: message.author.displayAvatarURL({
            dynamic: true
        })
    })
    message.delete().catch(err => {})
    webhook.send(msg).catch(err => {})
    await webhook.edit({
        name: `nqn` + number,
        avatar: Client.user.displayAvatarURL({
            dynamic: true
        })
    })
})