const Discord = require('discord.js'); 
const client = new Discord.Client(); 

client.on('ready', () => { 
  console.log(`BOT zalogował się jako: ${client.user.tag}`); 
});
client.on('message', async (message) => { 
  if (message.content === 'hej') { 
    message.reply('Witaj '); 
  }
  if (!message.guild) return;
  if (message.content.startsWith('!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member
          .kick('Powod')
          .then(() => {
            message.reply(`Wykopano Uzytkownika ${user.tag}`);
          })
          .catch(err => {
            message.reply('Problem w kopaniu użytkownika');
            console.error(err);
          });
      } else {
        message.reply("Użytkownik nie jest w tej gildi");
      }
    } else {
      message.reply("Nie znaleziono takiego uzytkownika. Nie zostal wykopany");
    }
  }
});

client.login('Token'); 