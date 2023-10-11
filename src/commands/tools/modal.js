const {
    SlashCommandBuilder,
    ModalBuilder,
    ActionRowBuilder,
    TextInputBuilder,
    TextInputStyle
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('modal')
        .setDescription('Return a modal!'),
    async execute(interaction, client) {
        const modal = new ModalBuilder()
            .setCustomId('fav-color')
            .setTitle("Fav Color?");

        const textInput = new TextInputBuilder()
            .setCustomId('favColorInput')
            .setLabel(`Why is your favorite color?`)
            .setRequired(true)
            .setStyle(TextInputStyle.Short);

        modal.addComponents(new ActionRowBuilder().addComponents(textInput));

        await interaction.showModal(modal);
    }
}