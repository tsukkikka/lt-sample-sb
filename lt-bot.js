// token check
if (!process.env.token) {
    console.log('Error: Specify token in environment');
    process.exit(1);
}

const Botkit = require('botkit');

const controller = Botkit.slackbot({
    debug:true
});

controller.hears('hello','direct_message', function(bot, message) {
    bot.reply(message,'Hello yourself!');
});
