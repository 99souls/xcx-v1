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

//     client.on("interactionCreate", async (interaction) => {
//     if (!interaction.isCommand()) return;

//     const { commandName } = interaction;

//     if (commandName === "ping") {
//         await interaction.reply("Pong!");
//     } else if (commandName === "server") {
//         await interaction.reply(
//         `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nowner: <@${
//             interaction.guild.ownerId
//         }>\nicon url: ${interaction.guild.iconURL()}`
//         );
//     } else if (commandName === "user") {
//         await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
//     }
// });

client.login(token);
