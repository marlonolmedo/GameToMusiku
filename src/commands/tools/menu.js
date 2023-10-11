const {
    SlashCommandBuilder,
    SelectMenuBuilder,
    StringSelectMenuBuilder,
    ActionRowBuilder,
    SelectMenuOptionBuilder,
    StringSelectMenuOptionBuilder
} = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('menu')
        .setDescription('Return a select menu'),
    async execute(interaction, client) {
        const menu = new StringSelectMenuBuilder()
            .setCustomId(`sub-menu`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                new StringSelectMenuOptionBuilder({
                    label: `Option #1`,
                    value: `https://www.youtube.com/watch?v=bvCsTca0uBc&list=RDMMbvCsTca0uBc&start_radio=1`
                }),
                new StringSelectMenuOptionBuilder({
                    label: 'Option #2',
                    value: `https://www.youtube.com/watch?v=DSaCBbZyZHE&list=RDMMbvCsTca0uBc&index=3`
                })
            );

        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        })
    }
}