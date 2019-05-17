module.exports = {
    token: "",
    production: false,
    patreon: false,
    shards: 5,
    apis: {
        patreon: "",
        sentry: "https://sentry-pengu-com@sentry.io/xxx",
        dbl: "",
        dbpw: "",
        b4d: "",
        dbg: "",
        weeb: "",
        idiotic: "2222",
        perspective: "",
        darksky: "",
        google: "",
        twitch: "",
        lyrics: "",
        fortnite: "",
        pubg: "",
        crapi: "",
        cocapi: "",
        csgo: "",
        spotify: {
            token: "",
            id: "",
            secret: ""
        }
    },
    nodes: [
        { host: "localhost", port: 2333, region: "us", password: "youshallnotpass", restPort: 2333 }
    ],
    database: {
        host: "localhost",
        port: 28015,
        database: "pengubot"
    },
    dashboard: {
        id: "22",
        secret: "22"
    }
};
