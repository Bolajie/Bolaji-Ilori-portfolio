import n8nIcon from './icons/n8n.png';
import claudeIcon from './icons/claude.png';
import supabaseIcon from './icons/supabase.png';
import makeIcon from './icons/make.png';
import zapierIcon from './icons/zapier.png';
import airtableIcon from './icons/airtable.png';
import hubspotIcon from './icons/hubspot.png';
import googleIcon from './icons/google-color.png';
import ghlIcon from './icons/gohighlevel.png';
import pythonIcon from './icons/python.png';
import codexIcon from './icons/codex.png';
import antigravityIcon from './icons/antigravity.png';

// Keys must match CORE_TOOLKIT names exactly (see constants.ts).
export const TOOL_ICONS: Record<string, string> = {
  GoHighLevel: ghlIcon,
  n8n: n8nIcon,
  Claude: claudeIcon,
  Supabase: supabaseIcon,
  Make: makeIcon,
  Zapier: zapierIcon,
  Airtable: airtableIcon,
  HubSpot: hubspotIcon,
  'Google Workspace': googleIcon,
  Python: pythonIcon,
  Codex: codexIcon,
  Antigravity: antigravityIcon,
};
