const { description } = require("./insta");

const { execute } = require("./insta");
const commandrecent = new Set();

module.exports= {
    name: 'insta',
    description: 'Displays ur Insta',
    category: 'social',
    author: 'Your Name',
    execute(message, args) {
        //cooldown hahahaha spamers
        if (commandrecent.has(message.author.id))  {
            message.channel.send("Wait.... Keep on waiting you will eventually get to type it. " +  `<@${message.author.id}>`);  //change this to include your time for the cooldown
        } else {
         //we want the insta. There is a placeholder. Then who we are telling. 

         message.channel.send('www.instagram.com/wrax.ps/')// put your insta here
         message.channel.send(`<@${message.author.id}>`)
         //lel
         //this is so they cant talk for how long you want them to
         commandrecent.add(message.author.id);
         setTimeout(() => {
             //get them out of the blacklist after when you want them too
             commandrecent.delete(message.author.id);
         }, 20000);
        }
    

    }
}