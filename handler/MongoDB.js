const mongoose = require('mongoose');;
class OwnDataBase {
    constructor(client, mongooseConnectionString) {
        this.constructor.validateCredentials(client, mongooseConnectionString),
          (this.client = client)
        this.mongooseConnectionString = mongooseConnectionString;
        this.users = {
            cache: new _Collection(),
            fetch: async(userid) => {
                const user = await this.client.users.fetch(userid);
                if(!user || typeof userid !== 'string') return null;
                let data = await this.client.schemas.user.findOne({ id: userid});
                if(!data)
                data = await new client.schemas.user({
                    id: user.id,
                    name: user.username,
                }).save()
                this.users.cache.set(userid, data);
                return data;
            }
        };
        this.guilds = {
            cache: new _Collection(),
            fetch: async (guildid) => {
                const guild = this.client.guilds.cache.get(guildid);
                if(!guild || typeof guildid !== 'string') return null;
                const data = await this.client.schemas.guild.findOne({ id: guildid });
                this.guilds.cache.set(guildid, data);
                return data;
            },
            updateCache: async (guildID) => {
                const data = await this.client.schemas.guilds.findOne({ id: guildID });
                this.client.cache.set(guildID, data);
            },
            updataPrefix: async (guildID, newprefix) => {
                return await this.client.schemas.guild.findOneAndUpdate(
                    { id: guildID},
                    { prefix: newprefix }
                );
            },
        };
    }
    static validateCredentials(client, mongooseConnectionString) {
        if(!client) throw new Error('.No client')
        if(typeof client !== 'object') throw new Error("Client is not an object.");
        if(!mongooseConnectionString) throw new Error("No MongoDB uri provided.")
        if(typeof mongooseConnectionString !== 'string') throw new Error("MongoDB provided is not a string.");
    }
    init() {
        mongoose.connect(this.mongooseConnectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        mongoose.connection.on("connected", () => {
            client.logger.db("Connected to MongoDB!");
        });
        mongoose.connection.on("disconnected", () => {
            client.logger.db("Disconnected from MongoDB!");
          });
    }
}
module.exports = OwnDataBase;