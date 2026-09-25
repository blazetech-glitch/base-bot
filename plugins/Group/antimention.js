const { blazetz } = require('../../devblaze/blazetz');
const { getAntiMention, setAntiMention, getMentionLimit } = require('../../lib/antimention');

blazetz({
  nomCom: 'antimention',
  alias: ['antimassmention', 'mentionguard'],
  desc: 'Protect groups from mass-mention spam.',
  categorie: 'Group',
  author: 'ARNOLDT20',
  reaction: '🛡️'
}, async (dest, client, { repondre, arg, verifGroupe, verifAdmin, superUser }) => {
  if (!verifGroupe) return repondre('❌ This command is for groups only.');
  if (!verifAdmin && !superUser) return repondre('❌ Only group admins or the bot owner can use this command.');

  const action = String(arg?.[0] || 'status').toLowerCase();
  if (!['on', 'off', 'status'].includes(action)) {
    return repondre('🛡️ Usage: `.antimention on`, `.antimention off`, or `.antimention status`');
  }

  if (action === 'status') {
    const enabled = await getAntiMention(dest);
    return repondre(`🛡️ *ANTIMENTION STATUS*\n\nStatus: *${enabled ? 'ON ✅' : 'OFF ❌'}*\nLimit: *${getMentionLimit()} mentions*`);
  }

  const enabled = await setAntiMention(dest, action === 'on');
  return repondre(`🛡️ Antimention is now *${enabled.toUpperCase()}*.\nMass mentions above ${getMentionLimit()} users will be removed.`);
});
