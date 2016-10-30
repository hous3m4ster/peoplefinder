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
bot.startLongPolling();
bot.on('message', msg => {
    msg.reply("Hi, I am peoplefinder\nI love finding people"); //test case
});
