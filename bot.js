const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();

var prefix = "22";
var prefix2 = "23";
var prefix3 = "24";
var prefix4 = "25";
var prefix5 = "26";
var prefix6 = "27";
var prefix7 = "28";

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);  
  client.user.setGame(`SPAM ? (22)`,"http://twitch.tv/Dream")

});

client.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (message.content.startsWith(prefix + 'say')) {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });


 client2.on('ready', () => {
  console.log(`Logged in as ${client2.user.tag}!`);  
  client2.user.setGame(`SPAM ? (23)`,"http://twitch.tv/Dream")

});


client2.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client2.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client2.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix2)) return;

  let command2 = message.content.split(" ")[0];
  command2 = command2.slice(prefix2.length);

  let args = message.content.split(" ").slice(1);

  if (command2 == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 client3.on('ready', () => {
  console.log(`Logged in as ${client3.user.tag}!`);  
  client3.user.setGame(`SPAM ? (24)`,"http://twitch.tv/Dream")

});

client3.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client3.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client3.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix3)) return;

  let command3 = message.content.split(" ")[0];
  command3 = command3.slice(prefix3.length);

  let args = message.content.split(" ").slice(1);

  if (command3 == "say") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });




 client4.on('ready', () => {
  console.log(`Logged in as ${client4.user.tag}!`);  
  client4.user.setGame(`SPAM ? (25)`,"http://twitch.tv/Dream")

});

client4.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client4.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client4.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix4)) return;

  let command4 = message.content.split(" ")[0];
  command4 = command4.slice(prefix4.length);

  let args = message.content.split(" ").slice(1);

  if (command4 == "say") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });




 client5.on('ready', () => {
  console.log(`Logged in as ${client5.user.tag}!`);  
  client5.user.setGame(`SPAM ? (26)`,"http://twitch.tv/Dream")

});

client5.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client5.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client5.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix5)) return;

  let command5 = message.content.split(" ")[0];
  command5 = command5.slice(prefix5.length);

  let args = message.content.split(" ").slice(1);

  if (command5 == "say") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });











 client6.on('ready', () => {
  console.log(`Logged in as ${client6.user.tag}!`);  
  client6.user.setGame(`SPAM ? (27)`,"http://twitch.tv/Dream")

});

client6.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client6.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client6.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix6)) return;

  let command6 = message.content.split(" ")[0];
  command6 = command6.slice(prefix6.length);

  let args = message.content.split(" ").slice(1);

  if (command6 == "say") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });

 



 client7.on('ready', () => {
  console.log(`Logged in as ${client7.user.tag}!`);  
  client7.user.setGame(`SPAM ? (28)`,"http://twitch.tv/Dream")

});

client7.on('ready', async() => {
var server = "512113786887340063"; // ايدي السررفر
var channel = "515918488057937920";//ايدي الروم
    setInterval(()=>{
    client7.guilds.get(server).channels.get(channel).send('***FAST IS OP***')
    },305);
})

client7.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix7)) return;

  let command7 = message.content.split(" ")[0];
  command7 = command7.slice(prefix7.length);

  let args = message.content.split(" ").slice(1);

  if (command7 == "say") {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR\`ليس لديك صلاحيات`**');
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });



client.login("NTE1MjI4NzczNDExNzE3MTIy.Duus-w.BlPdQ6QChjPM515GI2XFLUyJKS0");
client2.login("NTE1MjI5OTM2MTUyMjE1NTcx.DuutmQ.Q73naKjJ4sSPqiJcFFh0acZVlD0");
client3.login("NTE1MjMwNDYxOTE2NzQxNjQz.Duut5g.OGttDYC-SS3ujCnGuiMBQG0qk0M");
client4.login("NTE1MjMxNzMxMDk2MzU0ODM2.Duuuqw.sOyfX8GlpbpEZdcb2IpXFSFBFjM");
client5.login("NTE1MjQwMzkzNzYwMDQ3MTE0.Duuvkw.WcQKRLAb81WyOTQANwJdBNTGMkg");
client6.login("NTE1MjM1NjE5MzI1MzQ1ODM2.Duuv4A.ldMlmfa-1n7poVSyPkehqz5G-us");
client7.login("NTE1MjM2MTc2MjY5OTM0NjEy.DuuwNw.gBhmQsBKIkgEtSzRAPuiqOpAUOw");
