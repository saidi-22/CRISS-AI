const util = require('util');
const fs = require('fs-extra');
const { zokou } = require(__dirname + "/../framework/zokou");
const { format } = require(__dirname + "/../framework/mesfonctions");
const os = require("os");
const moment = require("moment-timezone");
const s = require(__dirname + "/../set");
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

zokou({ nomCom: "menu2", categorie: "General" }, async (dest, zk, commandeOptions) => {
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

  let infoMsg =  `
╭──────────────────❂
┃◎ ╭───*✧𝐂𝐑𝐈𝐒𝐒 𝐌𝐃✧───────❂*
┃◆ │ *User* : ${s.OWNER_NAME}
┃◆ │ *Mode* : ${mode}
┃◆ ╰────────────────❂
┃◆ │ *Time* : ${temps}  
┃◆ │ *Ram* : ${format(os.totalmem() - os.freemem())}/${format(os.totalmem())}
┃◎ ╰───────────────❂
╰──────────────────❂ \n\n`;
    let menuMsg=`  
  *𝐂𝐑𝐈𝐒𝐒 𝐌𝐃 𝐂𝐎𝐌𝐌𝐀𝐍𝐃𝐒*
`;

    for (const cat in coms) {
        menuMsg += `*╭━━━◆ *${cat}* *◆⁠━━─••*`;
        for (const cmd of coms[cat]) {
            menuMsg += `  
*┊◆* ${cmd}`;
        }
        menuMsg += `
*╰════────════◆◆◆* \n`
    }

    menuMsg += `
𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐂𝐑𝐈𝐒𝐒 𝐕𝐄𝐕𝐎\n`;

    try {
        const senderName = nomAuteurMessage || message.from;  // Use correct variable for sender name
        await zk.sendMessage(dest, {
            text: infoMsg + menuMsg,
            contextInfo: {
                mentionedJid: [senderName],
                externalAdReply: {
                    title: "𝐂𝐑𝐈𝐒𝐒 𝐌𝐃 𝐔𝐏𝐃𝐀𝐓𝐄𝐒",
                    body: "Tap Here Follow Our Channel Updates",
                    thumbnailUrl: "https://files.catbox.moe/ek7wyr.jpg",
                    sourceUrl: "https://whatsapp.com/channel/0029Vb0HIV2G3R3s2II4181g",
                    mediaType: 1,
                    renderSmallerThumbnail: true
                }
                    
        // Download and send audio
        const audioUrl = "https://files.catbox.moe/xci982.mp3";
        const audioPath = "./temp_audio.mp3";

        const response = await axios({
            url: audioUrl,
            method: "GET",
            responseType: "stream",
        });

        const writer = fs.createWriteStream(audioPath);
        response.data.pipe(writer);

        writer.on("finish", async () => {
            await zk.sendMessage(dest, { audio: { url: audioPath }, mimetype: "audio/mp4", ptt: true }, { quoted: ms });
            fs.unlinkSync(audioPath); // Delete the audio file after sending
        });

    } catch (e) {
        console.log("🥵🥵 Menu error: " + e);
        repondre("🥵🥵 Menu error: " + e);
    }
});
