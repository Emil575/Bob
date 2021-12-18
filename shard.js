const { ShardingManager } = require('discord.js')
const config = require('./json/config.json')

const shards = new ShardingManager('./index.js', {
    token: config.token,
    totalShards: 'auto'
});

shards.on('shardCreate', shard => {
    console.log(`[${new Date().toString().split(" ", 5).join(" ")}] Launched shard #${shard.id}`);
})

shards.spawn(shards.totalShards, 1000)
/**
 * @INFO
 * Bot Coded by EmiL#8665
 * @INFO
 * Code from Emil Development
 * @INFO
 * Please mention him / Emil Development, when using this Code!
 * @INFO
 */