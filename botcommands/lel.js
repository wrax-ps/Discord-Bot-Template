const { description, execute } = require("./lel");

module.exports = {
    name: 'lel',
    //normal stuffes
    author: 'wrax.ps',
    category: 'moderation, banhammer',
    description: 'an ban command',
    execute(message, args) {
        message.channel.send("lel")
        message.channel.send(`<@${message.author.id}>`)
    }
}