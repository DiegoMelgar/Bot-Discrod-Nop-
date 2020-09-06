const Disc = require('discord.js');

const messageEmbed = () => {

    const msgEmbed = new Disc.MessageEmbed() 

     .setColor('#001d5e')
     .setTitle('Aviso IMportante')
     .setDescription('Hola')

    return msgEmbed;

};

module.exports = messageEmbed;