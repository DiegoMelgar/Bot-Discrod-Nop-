const Discord = require('discord.js');
const client = new Discord.Client();
const messageEmbed = require('./Utils/messageEmbed');

require('dotenv').config();

const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

client.on('message', msg => {
    if(msg.content.toLocaleLowerCase() === 'hola'){

        console.log('le han enviado un mensaje grupal');
        msg.reply('Hola Hello');
        //msg.channel.send(messageEmbed()); 
        msg.react('👍');

    }

    if(msg.channel.type ==='dm'){
        if(msg.content.toLocaleLowerCase() === 'hola'){
            console.log('le han enviado un DM');
            msg.reply("Me has enviado un mensage privado")
            msg.reply(':thinking:');
            msg.react('👍');
        }
    }
})

client.on('ready', () => {
console.log(`Conectado... ${client.user.tag}`);
})


client.login(DISCORD_TOKEN);