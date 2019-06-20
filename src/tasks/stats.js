const { Task, config } = require("../index");

module.exports = class extends Task {

    async run() {
        if (this.client.user.id !== "303181184718995457" || this.client.shard.id !== 0) return;
        if (!this.client.ready) return;

        let [guilds, vc, users] = [0, 0, 0];
        const results = await this.client.shard.broadcastEval(`[this.guilds.reduce((prev, val) => val.memberCount + prev, 0), this.guilds.size, this.music.filter(music => music.playing).size]`);
        for (const result of results) {
            users += result[0];
            guilds += result[1];
            vc += result[2];
        }

        await this.fetchURL(`https://discordbots.org/api/bots/${this.client.user.id}/stats`, {
            headers: { Authorization: config.apis.dbl },
            data: { server_count: guilds, shard_count: this.client.shard.shardCount }
        });

        await this.fetchURL(`https://bots.ondiscord.xyz/bot-api/bots/${this.client.user.id}/guilds`, {
            headers: { Authorization: config.apis.dbpw },
            data: { guildCount: guilds }
        });

        await this.fetchURL(`https://discordbotlist.com/api/bots/${this.client.user.id}/stats`, {
            headers: { Authorization: `Bot ${config.apis.ogdbl}` },
            data: { guilds: guilds, users: users, shard_id: 0, voice_connections: vc }
        });

        await this.fetchURL(`https://botsfordiscord.com/api/bot/${this.client.user.id}`, {
            headers: { Authorization: config.apis.b4d },
            data: { server_count: guilds }
        });

        await this.fetchURL(`https://api.discordbots.group/v1/bot/${this.client.user.id}`, {
            headers: { Authorization: config.apis.dbg },
            data: { server_count: guilds }
        });

        await this.fetchURL(`https://discord.boats/api/bot/${this.client.user.id}`, {
            headers: { Authorization: config.apis.dboats },
            data: { server_count: guilds }
        });
    }

};
