const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder().setName("server").setDescription("gives server info"),
    async execute(interaction) {
        await interaction.reply(
            `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nowner: <@${
                interaction.guild.ownerId
            }>\nicon url: ${interaction.guild.iconURL()}`
        );
    },
};
