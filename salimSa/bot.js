const { Client, Intents } = require('discord.js');
const dotenv = require("dotenv")
const axios = require("axios")
dotenv.config()
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.once('ready', () => {
    console.log(`${client.user.username} Online!`);
});

client.on('messageCreate', async (message) => {
    if (!(message.author.bot)) {
        if (message.content.includes('สลิ่ม') || message.content.includes('กะทิ') || message.content.includes('ซ่าหริ่ม')) {
            await axios.get('https://watasalim.vercel.app/api/quotes/random')
            .then(res => {
                message.channel.send(res.data.quote.body)
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
})

client.login(process.env.TOKEN);
