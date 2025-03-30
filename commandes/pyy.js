
const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "bot", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
𝙁𝘼𝙃𝘼𝙈𝙐 𝙁𝘼𝙄𝘿𝘼 𝙉𝘼 𝙆𝘼𝙕𝙄 𝙕𝘼 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋 𝘽𝙊𝙏

◆𝙇𝙞𝙣𝙖𝙫𝙞𝙚𝙬 𝙨𝙩𝙖𝙩𝙪𝙨 𝙖𝙪𝙩𝙤𝙢𝙖𝙩𝙞𝙘𝙖𝙡𝙡𝙮 𝙟𝙪𝙨𝙩 𝙣𝙤𝙬 𝙗𝙞𝙡𝙖 𝙠𝙪𝙩𝙪𝙢𝙞𝙖 𝙈𝘽 𝙝𝙖𝙩𝙖 𝙨𝙞𝙢𝙪 𝙮𝙖𝙠𝙤 𝙞𝙠𝙞𝙬𝙖 𝙞𝙢𝙚𝙯𝙞𝙢𝙖 (𝙖𝙪𝙩𝙤𝙨𝙩𝙖𝙩𝙪𝙨 𝙫𝙞𝙚𝙬)

◆𝙄𝙩𝙖𝙠𝙪𝙛𝙖𝙣𝙮𝙖 𝙪𝙤𝙣𝙚𝙠𝙖𝙣𝙚 𝙤𝙣𝙡𝙞𝙣𝙚 𝙠𝙞𝙡𝙖 𝙢𝙙𝙖 𝙃𝙖𝙩𝙖 𝙆𝙖𝙢𝙖 𝙃𝙪𝙣𝙖 𝘽𝙖𝙣𝙙𝙤 (𝙖𝙡𝙬𝙖𝙮𝙨 𝙤𝙣𝙡𝙞𝙣𝙚)

◆𝙆𝙪𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙢𝙪𝙨𝙞𝙘 , 𝙫𝙞𝙙𝙚𝙤𝙨 𝙣𝙖 𝙡𝙮𝙧𝙞𝙘𝙨 𝙖𝙞𝙣𝙖 𝙯𝙤𝙩𝙚 (𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙)

◆𝙆𝙪𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙫𝙞𝙙𝙚𝙤 𝙯𝙖 𝙔𝙤𝙪𝙏𝙪𝙗𝙚, 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙣𝙖 𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢

◆𝙆𝙪𝙩𝙚𝙣𝙜𝙚𝙣𝙚𝙯𝙖 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙣𝙖 𝙡𝙤𝙜𝙤

◆𝙆𝙪𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙥𝙞𝙘𝙝𝙖 𝙖𝙪 𝙫𝙞𝙙𝙚𝙤 𝙖𝙢𝙗𝙖𝙮𝙤 𝙪𝙢𝙚𝙩𝙪𝙢𝙞𝙬𝙖 𝙪𝙞𝙤𝙣𝙚 𝙢𝙖𝙧𝙖 𝙢𝙤𝙟𝙖 (𝙖𝙣𝙩𝙞𝙫𝙞𝙚𝙬 𝙤𝙣𝙘𝙚)

◆𝙆𝙪𝙤𝙣𝙖 𝙢𝙚𝙨𝙨𝙖𝙜𝙚,𝙫𝙞𝙙𝙚𝙤,𝙥𝙞𝙘𝙩𝙪𝙧𝙚,𝙙𝙤𝙘𝙪𝙢𝙚𝙣𝙩 𝙢𝙩𝙪 𝙖𝙡𝙞𝙯𝙤𝙛𝙪𝙩𝙖 (𝙖𝙣𝙩𝙞𝙙𝙚𝙡𝙚𝙩𝙚)

◆𝙆𝙪𝙙𝙤𝙬𝙣𝙡𝙤𝙖𝙙 𝙨𝙩𝙖𝙩𝙪𝙨 𝙪𝙩𝙖𝙮𝙤𝙞𝙥𝙚𝙣𝙙𝙖 (𝙨𝙩𝙖𝙩𝙪𝙨 𝙨𝙖𝙫𝙚𝙧)

◆𝙆𝙪𝙯𝙪𝙞𝙖 𝙠𝙪𝙥𝙞𝙜𝙞𝙬𝙖 𝙫𝙞𝙙𝙚𝙤 𝙖𝙪 𝙫𝙤𝙞𝙘𝙚 𝙘𝙖𝙡𝙡 𝙢𝙙𝙖 𝙪𝙩𝙖𝙥𝙤𝙠𝙪𝙖 𝙗𝙪𝙨𝙮 (𝙖𝙣𝙩𝙞𝙘𝙖𝙡𝙡)

◆𝙆𝙪𝙯𝙪𝙞𝙖 𝙢𝙩𝙪 𝙠𝙪𝙨𝙝𝙞𝙣𝙙𝙬𝙖 𝙠𝙪𝙩𝙪𝙢𝙖 𝙡𝙞𝙣𝙠 𝙠𝙬𝙚𝙣𝙮𝙚 𝙜𝙧𝙤𝙪𝙥 𝙡𝙖𝙠𝙤 (𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠)

◆𝙆𝙪𝙚𝙙𝙞𝙩 𝙥𝙞𝙘𝙝𝙖 𝙣𝙖 𝙫𝙤𝙞𝙘𝙚 (𝙚𝙙𝙞𝙩𝙤𝙧)

◆𝙆𝙪𝙗𝙖𝙙𝙞𝙡𝙞𝙨𝙝𝙖 𝙥𝙞𝙘𝙝𝙖 𝙠𝙪𝙖 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙖𝙪 𝙨𝙝𝙤𝙧𝙩 𝙫𝙞𝙙𝙚𝙤 𝙠𝙪𝙖 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙖𝙪 𝙨𝙝𝙤𝙧𝙩 𝙨𝙩𝙞𝙘𝙠𝙚𝙧 𝙠𝙪𝙖 𝙫𝙞𝙙𝙚𝙤

◆𝙆𝙪𝙯𝙪𝙖 𝙣𝙖 𝙆𝙪𝙛𝙪𝙩𝙖 𝙡𝙞𝙣𝙠𝙨 𝙠𝙬𝙚𝙣𝙮𝙚 𝙂𝙧𝙤𝙪𝙥 𝙡𝙖𝙠𝙤 (𝙖𝙣𝙩𝙞𝙡𝙞𝙣𝙠)

◆𝙃𝙖𝙮𝙖 𝙮𝙤𝙩𝙚 𝙣𝙞 𝙠𝙖𝙯𝙞 𝙉𝙖 𝙈𝙖𝙩𝙪𝙢𝙞𝙯𝙞 𝙮𝙖 𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝘽𝙤𝙩 𝙣𝙖 𝙆𝙖𝙯𝙞 𝙕𝙞𝙣𝙜𝙞𝙣𝙚 𝙨𝙞𝙬𝙚𝙯𝙞 𝙆𝙪𝙤𝙧𝙤𝙙𝙝𝙚𝙨𝙝𝙖 𝙝𝙖𝙥𝙖.

◆𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥 𝙗𝙤𝙩 𝙞𝙩𝙖𝙠𝙪𝙨𝙖𝙞𝙙𝙞𝙖 𝙆𝙪𝙤𝙣𝙜𝙚𝙯𝙖 𝙫𝙞𝙚𝙬𝙚𝙧𝙨 𝙬𝙖𝙠𝙤 𝙗𝙖𝙖𝙙𝙖 𝙮𝙖 𝙬𝙖𝙩𝙪 𝙠𝙪𝙤𝙣𝙖 𝙪𝙣𝙖𝙛𝙖𝙩𝙞𝙡𝙞𝙖 𝙠𝙞𝙡𝙖 𝙨𝙩𝙖𝙩𝙪𝙨 𝙯𝙖𝙤 𝙟𝙪𝙨𝙩 𝙣𝙤𝙬. 𝙃𝙞𝙫𝙤 𝙉𝙖𝙤 𝙬𝙖𝙩𝙖𝙖𝙣𝙯𝙖 𝙠𝙪𝙛𝙖𝙩𝙞𝙡𝙞𝙖 𝙨𝙩𝙖𝙩𝙪𝙨 𝙯𝙖𝙠𝙤

𝙉𝙄𝘾𝙃𝙀𝙆𝙄 𝙄𝙉𝘽𝙊𝙓 𝙄𝙇𝙄 𝙆𝙐𝙋𝘼𝙏𝘼 𝙃𝙐𝘿𝙐𝙈𝘼 𝙃𝙄𝙄
 `;    
let menuMsg = `
`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🤫🤫 Menu erreur " + e);
        repondre("🤫🤫 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🤫🤫 Menu erreur " + e);
        repondre("🤫🤫 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

}); 


/*const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "script", categorie: "General" }, async (dest, zk, commandeOptions) => {
    let { ms, repondre ,prefixe,nomAuteurMessage,mybotpic} = commandeOptions;
    let { cm } = require(__dirname + "/../framework//zokou");
    var coms = {};
    var mode = "public";
    
    if ((s.MODE).toLocaleLowerCase() != "yes") {
        mode = "private";
    }


    

    cm.map(async (com, index) => {
        if (!coms[com.categorie])
            coms[com.categorie] = [];
        coms[com.categorie].push(com.nomCom);
    });

    moment.tz.setDefault('Etc/GMT');

// Créer une date et une heure en GMT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');

  let infoMsg =  `
   *BMW MD IMPORTANT INFO* 
❒───────────────────❒
*GITHUB LINK*
> https://github.com/ibrahimaitech/BMW-MD

*WHATSAPP CHANNEL*
> https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y

*FOR MORE INFO TAP ON THE LINK BELOW*
> https://github.com/IBRAHIM-TECH-AI/IBRAHIM-ADAMS-INFO⁠
╭───────────────────❒
│❒⁠⁠⁠⁠ *RAM* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
│❒⁠⁠⁠⁠ *DEV* : *Ibrahim Adams*
⁠⁠⁠⁠╰───────────────────❒
  `;
    
let menuMsg = `
     𝑰𝑩𝑹𝑨𝑯𝑰𝑴 𝑨𝑫𝑨𝑴𝑺 𝑺𝑪𝑰𝑬𝑵𝑪𝑬

❒────────────────────❒`;

   var lien = mybotpic();

   if (lien.match(/\.(mp4|gif)$/i)) {
    try {
        zk.sendMessage(dest, { video: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" , gifPlayback : true }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
// Vérification pour .jpeg ou .png
else if (lien.match(/\.(jpeg|png|jpg)$/i)) {
    try {
        zk.sendMessage(dest, { image: { url: lien }, caption:infoMsg + menuMsg, footer: "Je suis *Beltahmd*, déveloper Beltah Tech" }, { quoted: ms });
    }
    catch (e) {
        console.log("🥵🥵 Menu erreur " + e);
        repondre("🥵🥵 Menu erreur " + e);
    }
} 
else {
    
    repondre(infoMsg + menuMsg);
    
}

});*/
