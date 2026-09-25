/** BLAZE XMD identity, environment loading, and default runtime settings. */
const fs = require('fs-extra');

if (fs.existsSync('settings.env')) {
    require('dotenv').config({ path: __dirname + '/settings.env' });
}

module.exports = {
    session: process.env.SESSION_ID || '',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "YOUR NAME",
    NUMERO_OWNER: process.env.NUMERO_OWNER || "",
    BOT: process.env.BOT_NAME || 'BLAZE XMD',
    BOT_NAME: process.env.BOT_NAME || 'BLAZE XMD',
    DEV: process.env.DEVELOPER_NAME || 'ARNOLDT20',
    DEV_NUMBER: process.env.DEVELOPER_NUMBER || '',
    CREDIT: process.env.CREDIT || 'blazetech',
    URL: process.env.BOT_MENU_LINKS || '',
    WELCOME_MEDIA_URL: process.env.WELCOME_MEDIA_URL || '',

    // Database-backed toggles use these safer values on a fresh installation.
    ANTICALL: process.env.ANTICALL || 'off',
    ANTIDELETE: process.env.ANTIDELETE || 'off',
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || 'off',
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'off',
    AUTO_REACT_STATUS: process.env.AUTO_REACT_STATUS || 'off',
    AUTO_READ: process.env.AUTO_READ || 'off',
    MODE: process.env.PUBLIC_MODE || 'private',
    PM_PERMIT: process.env.PM_PERMIT || 'off',
    WARN_COUNT: process.env.WARN_COUNT || '3',
    ETAT: process.env.PRESENCE || '',
};

// Reload this module when the file changes during development.
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
