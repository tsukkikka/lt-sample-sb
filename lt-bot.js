// token check
if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

const Botkit = require('botkit');

const controller = Botkit.slackbot({
    debug:false
});

const bot = controller.spawn({
    token: process.env.token
}).startRTM(function(err, bot, payload) {
    if (err) {
        console.log('Error: Cannot to Slack');
        process.exit(1);
    }
});

controller.hears(['hello'], 'direct_mention', function (bot, message) {
    bot.reply(message, message.text)
});
