const { blazetz } = require('../../devblaze/blazetz');
const { getCachedSettingsSync, updateCachedSetting } = require('../../lib/settingsCache');
const settings = require('../../settings');

blazetz({
  nomCom: 'statussaver',
  alias: ['autostatus', 'savestatus', 'statussave'],
  desc: 'Control automatic status saving to the owner chat.',
  categorie: 'General',
  author: 'ARNOLDT20',
  reaction: '💾'
}, async (dest, client, { repondre, arg, superUser }) => {
  if (!superUser) return repondre('❌ Only the bot owner can control the status saver.');

  const action = String(arg?.[0] || 'status').toLowerCase();
  const current = getCachedSettingsSync().AUTO_DOWNLOAD_STATUS ?? settings.AUTO_DOWNLOAD_STATUS ?? 'off';
  if (action === 'status') {
    return repondre(`💾 *STATUS SAVER*\n\nAutomatic saving: *${String(current).toUpperCase()}*\n\nUse ".statussaver on" or ".statussaver off".`);
  }
  if (!['on', 'off'].includes(action)) {
    return repondre('💾 Usage: `.statussaver on`, `.statussaver off`, or `.statussaver status`');
  }

  await updateCachedSetting('AUTO_DOWNLOAD_STATUS', action);
  return repondre(`✅ Automatic status saver is now *${action.toUpperCase()}*.\nIncoming text, image, and video statuses will ${action === 'on' ? 'be forwarded to the owner chat.' : 'no longer be forwarded automatically.'}`);
});
