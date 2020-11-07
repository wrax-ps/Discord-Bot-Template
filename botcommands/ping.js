module.exports = {
    name: 'ping',
    // description and name. FYI first inpressions matter
    description: "If you ping you will get a pong",
    category: 'Fun, Essentials',
    Author: 'Wraxps',
    execute(message, args) {
        // We want to make it send the gif and the message. Or, maybe you don't I'm not going to judge.
        message.channel.send('https://media0.giphy.com/media/3ornjUFh0NE3Bewf7i/giphy.gif')
        message.channel.send('Pong!')
    }
}