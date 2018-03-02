const LtBot = require('./lib/lt-bot');
const ltBot = new LtBot;

// ltBot.talk("東京都港区芝の天気");

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

controller.hears([''], ['direct_message,direct_mention,mention'], function (bot, message) {
  console.log(message.text);

  ltBot.talk(message.text)
  .then(ret =>{
    bot.reply(message, ret);
  })

});


