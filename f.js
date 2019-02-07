                                                                                                                                                                                                        
const Discord = require("discord.js"); const db = require('quick.db')
                                                                                                                                                                                                          
exports.run = (client, message, guild) => {


var options = ['/home/auxfranca/mod/Audio/mus1.mp3', '/home/auxfranca/mod/Audio/musi2.mp3', '/home/auxfranca/mod/Audio/vns.mp3', '/home/auxfranca/scrim/Audio/siche.mp3']
let channel = message.guild.channels.find(channel => channel.name === "Sincronización");
var response = options[Math.floor(Math.random()*options.length)]
           channel.join().then(connection => {
                const dispatcher = connection.playFile(response);
        dispatcher.on('end', () => {
channel.leave()
})
})                                                                                                                                                                                                        
  
}                                                                                                                                                                                         
                                                                                                                                                                                                          
                                                                                                                                                                                                          
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};
                                                                                                                                                                                                          
exports.help = {
  name: 'f',
  description: 'Cuenta atras en minutos.',
  usage: 'm [time]'
};
