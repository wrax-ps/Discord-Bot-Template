const { execute } = require("./ping");
const commandrecent = new Set();

module.exports = {
    //name you can change this idc
    name: 'slap',
    author: 'wraxps',
    category: 'Fun',
    //I included a REAL quote dont take me seriously
    description: "This is a slap. You can Slap people. -Pablo Piccasso",
    execute(message, args) {


        //cooldown hahahaha spamers
        if (commandrecent.has(message.author.id))  {
            message.channel.send("Wait.... Keep on waiting you will eventually get to type it. " +  `<@${message.author.id}>`);  //change this to include your time for the cooldown
        } else {
         //we want the gif then the message you can change this order. But, why would you want to.
         message.channel.send('https://media3.giphy.com/media/3o7aD3L9aEzBpBF9hm/giphy.gif')
         message.channel.send('You Have Got Slapped By.')
         //here we are going to state who you got slapped by
         message.channel.send(`<@${message.author.id}>`)

         //this is so they cant talk for how long you want them to
         commandrecent.add(message.author.id);
         setTimeout(() => {
             //get them out of the blacklist after when you want them too
             commandrecent.delete(message.author.id);
         }, 20000);
        }
    }
}