// requiring necessary classes for discord.js

const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

// creating new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// once client is ready this code runs once
// waits for 'ready' then following code
client.once("ready", () => {
  console.log("bot is ready");
});

// log in to discord using client's token
client.login(token);
console.log("bot is logged in");
