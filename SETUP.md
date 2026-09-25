# BLAZE XMD lightweight base

A clean starter base for a WhatsApp bot using the BLAZE XMD plugin system.

**Credits:** blazetech  
**Developer:** ARNOLDT20

## 1. Configure the bot

1. Copy `settings.env.example` to `settings.env`.
2. Replace the values marked `YOUR_...` or `PASTE_...`.
3. At minimum, set:
   - `SESSION_ID`: your private WhatsApp session value
   - `BOT_NAME`: the name users should see
   - `OWNER_NAME`: your display name
   - `NUMERO_OWNER`: your WhatsApp number with country code
4. Keep `settings.env` private. It is ignored by Git.

The credit fields are already set to `blazetech` and `ARNOLDT20`, but can be changed with `CREDIT` and `DEVELOPER_NAME` if you are making your own fork.

## 2. Install and run

Use Node.js 20.9 or newer:

```bash
npm install
npm start
```

The bot will connect with the session configured in `settings.env`. Do not share the session ID or generated authentication files.

## 3. Lightweight plugin profile

Only the files listed in `plugins.config.json` load at startup. The profile includes 32 plugins, with status saver controls, status posting/history, tag-all tools, antilink, antimention, antibot, antispam, antisticker, bad-word protection, group status, mute, and core commands.

The remaining plugins stay in the repository but are disabled. To enable one, add its path relative to `plugins/` to the `enabled` list, for example:

```json
"General/translate.js"
```

Enable or disable plugins by editing the allow-list and restarting the bot. Downloaders, AI features, media conversion, and some moderation plugins may require external services, extra configuration, or FFmpeg.

## 4. Safe defaults

Fresh installations start in private mode with automatic calls, status reading, status reactions, and status downloads disabled. Change these only after testing the bot in a private chat or test group.

## 5. Important notes

- This base does not include a WhatsApp account or session; pairing must be done by you.
- The default sandbox is for testing only. For 24/7 operation, deploy it on a host that supports a persistent Node.js process.
- If WhatsApp disconnects, stop duplicate bot instances before pairing again.
