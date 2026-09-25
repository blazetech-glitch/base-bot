"use strict";

const { getSettings, updateSetting } = require("../database/db");

const PREFIX = "BLAZE_ANTIMENTION_";
const cache = new Map();

function keyFor(groupJid) {
  return `${PREFIX}${groupJid}`;
}

async function getAntiMention(groupJid) {
  if (cache.has(groupJid)) return cache.get(groupJid);
  const settings = await getSettings();
  const enabled = settings[keyFor(groupJid)] === "on";
  cache.set(groupJid, enabled);
  return enabled;
}

async function setAntiMention(groupJid, enabled) {
  const value = enabled ? "on" : "off";
  await updateSetting(keyFor(groupJid), value);
  cache.set(groupJid, enabled);
  return value;
}

function getMentionLimit() {
  const configured = Number(process.env.ANTIMENTION_LIMIT || 5);
  return Number.isFinite(configured) && configured >= 2 ? Math.min(configured, 50) : 5;
}

module.exports = { getAntiMention, setAntiMention, getMentionLimit };
