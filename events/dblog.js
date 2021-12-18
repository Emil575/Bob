const client = require("..")
const config = require('../json/config.json')
if(config.DbLog === true){
    console.log(client.bob)
    console.log(client.settings)
    console.log(client.settings3)
    console.log(client.jointocreatemap)
    console.log(client.Anti_Nuke_System)
    console.log(client.setups)
    console.log(client.points)
}else
if(config.DbLog === false){
    return console.log('Db Log Disable')
}