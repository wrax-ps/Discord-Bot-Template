// this is your help command. Self-Explanitor

const { category, execute } = require("./help");
const commandrecent = new Set()

module.exports = {
    name: 'help',
    //the normal sutffes name author category description 
    author: 'wraxps https://www.instagram.com/wrap.xs/',
    category: 'Help, Essential',
    description: 'it gives you list of commands that you can use',
    // please if make any more commands add them into here
    execute(message, args) {
        //there is going to be cooldown like usuall
        //shameless elf promotion
        if (commandrecent.has(message.author.id))  {
            message.channel.send("Wait.... Keep on waiting you will eventually get to type it. " +  `<@${message.author.id}>`);  //change this to include your time for the cooldown
        } else {
        //send them the commands look up discord syntax codes for looks
        message.channel.send("This is a list of commands that you can use.wrap.xs on insta.;-;")
        message.channel.send("```Normal   Admin \n!help    !lel\n!insta\n!ping\n!slap```")
        //author name who asked
        message.channel.send(`<@${message.author.id}>`)
        //change how long you want them not to talk
        commandrecent.add(message.author.id);
        setTimeout(() => {
            //removing them to the tiemeout
            commandrecent.delete(message.author.id)
        }, 20000); //this is like micro seconds the only thing that matters the first two digits
        }
    }
}
