const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "alive", categorie: "General" }, async (dest, zk, commandeOptions) => {
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

    moment.tz.setDefault('EAT');

// Créer une date et une heure en EAT
const temps = moment().format('HH:mm:ss');
const date = moment().format('DD/MM/YYYY');
let infoMsg=`𝐇𝐈 𝐓𝐇𝐄𝐑𝐄 👋 \n\n`;
let menuMsg=`𝐂𝐑𝐈𝐒𝐒 𝐌𝐃 𝐁𝐎𝐓 𝐈𝐒 𝐀𝐋𝐈𝐕𝐄 𝐀𝐋𝐋 𝐓𝐇𝐄 𝐓𝐈𝐌𝐄\n`;
    try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "𝐂𝐑𝐈𝐒𝐒 𝐌𝐃 𝐔𝐏𝐃𝐀𝐓𝐄𝐒",
                    body: "Tap Here To Follow Our Channel For Updates",
                    thumbnailUrl: "https://files.catbox.moe/ek7wyr.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029Vb0HIV2G3R3s2II4181g",
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error("Menu error: ", error);
        repondre("🥵🥵 Menu error: " + error);
    }
});
