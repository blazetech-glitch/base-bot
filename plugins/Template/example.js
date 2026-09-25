const { blazetz } = require('../../devblaze/blazetz');

/**
 * Copy this file into another plugin category and rename the command.
 * Add the new path to plugins.config.json to enable it.
 */
blazetz({
  nomCom: 'example',
  alias: ['sample'],
  categorie: 'Template',
  reaction: '✨',
  author: 'YOUR_NAME'
}, async (dest, client, { repondre, arg }) => {
  const subject = arg.length ? arg.join(' ') : 'your new plugin';
  return repondre(
    `╭─〔 ✨ BLAZE PLUGIN 〕─╮\n` +
    `│ Hello from ${subject}!\n` +
    `│ Built with the BLAZE XMD skeleton.\n` +
    `╰────────────────────╯\n` +
    `        © blazetech · ARNOLDT20`
  );
});
