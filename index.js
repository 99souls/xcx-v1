// requiring necessary classes for discord.js

const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");

// creating new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// once client is ready this code runs once
// waits for 'ready' then following code
client.once("ready", () => {
  console.log("bot is ready");
  // setting presence (activity + status)
  client.user.setPresence({ activities: [{ name: "with ur heart" }], status: "dnd" });
});

// log in to discord using client's token
client.login(token);

const sent = await interaction.reply({ content: "Pinging...", fetchReply: true });
interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
