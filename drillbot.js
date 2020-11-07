// You might want this just sayin. ;-;
const Discord = require('discord.js');

const client = new Discord.Client();

// Your beutiful prefix. Word of advise dont use emojis.
const prefix = '!';

const fs = require('fs');

// This is not required I keep there as remberence for all the errors.
const commandrecent = new Set();

client.commands = new Discord.Collection();

//Looking for other files then our commands. AKA looking for the imposters.
const commandFiles = fs.readdirSync('./botcommands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./botcommands/${file}`);

    client.commands.set(command.name, command);
}
// turn it on. Or maybe just ... Don't turn it on
// You can change this message. Look up the sytax codes you want if you want them. :)
client.once('ready', () =>{
    console.log('DrillBot is at Your Command! XD\nUse It Wisley ;-;.')
});

//get dese messages boi 

client.on('message', message => {
    // Look for the Prefix -If no prefix no answer-.
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    //here are these commands these are stored in /botcommands/ in this folder
    if (command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'slap') {
        client.commands.get('slap').execute(message, args);
    } else if (command == 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command == 'insta'){
        client.commands.get('insta').execute(message, args);
    } else if (command == 'help'){
        client.commands.get('help').execute(message,args);
    } else if (command == 'lel'){
        client.commands.get('lel').execute(message, args);
    }
});

// Put your client token here just DO NOT use anyones elses.
client.login('your token');

