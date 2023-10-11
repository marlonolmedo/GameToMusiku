module.exports = {
    data: {
        name: `sub-yt`
    },
    async execute(interaction, client){
        await interaction.reply({
            content: `https://www.youtube.com/watch?v=bvCsTca0uBc&list=RDMMbvCsTca0uBc&start_radio=1`
        })
    }
}