/*
 * made with :heart: and javascript ;)
 *
 * -hous3m4ster
 *
 */
'use strict';
const token = "<token>"; //insert token obtained through @botfather
const telebot = require("telebotframework").TelegramBot;
const bot = new telebot(token);
bot.startLongpolling();
bot.on('text', msg => {
        if (msg.text.indexOf('/') === 0) {
            let commandArgs = msg.text.split(/\s+/);
            let command = commandArgs.shift();
            command = command.substr(1).split('@')[0];
            command = command.toLowerCase()
            let commandText = commandArgs.join(' ');
            let text = '';
            switch(command){
                case 'findperson':
                case 'findpeople':
                case 'findpeepz':
                case 'findsomeone':
                    msg.reply(msg.from.id);
                    break;
            }
        }
});
