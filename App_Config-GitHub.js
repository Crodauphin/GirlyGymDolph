/* ══════════════════════════════════════════════════════════════════════════
   GIRLY GYM DOLPH — App_Config-GitHub.js
   Layer 2a · Per-app INFRASTRUCTURE config

   OWNED BY CODING THREADS ONLY.
   Do NOT author athlete content here (no name, no constraints, no gym list,
   no program) — that lives in Athlete_Profile-GitHub.js / Gym_Program-GitHub.js,
   which are owned by the "Fitness Profile & Program" thread.

   This file exists precisely so that coding-owned settings (theme default,
   Drive backup destination) can never be silently dropped when a content
   thread regenerates the profile or program file.

   This is Girly Gym Dolph's copy. Gym Dolph has its own App_Config-GitHub.js
   with different values. NEVER copy this file into the Gym Dolph repo, and
   never overwrite it when copying an engine release across from Gym Dolph.
══════════════════════════════════════════════════════════════════════════ */

// Default theme on first run. The live choice is stored in app state after that.
// Gym Dolph's copy sets 'dark'.
window.DEFAULT_THEME = 'bright';

// Google Drive backup destination — per app, never shared.
// Folder: "Gym Dolph - App / JSON backup" (Emily's Drive).
// A distinct filename per app is deliberate belt-and-braces: even if a folder
// ID were ever wrong, the two apps still cannot overwrite each other's backup.
window.USER_DRIVE_FOLDER_ID = '1-RMMlwBMIQF8A5OZtVluZN81p9O35KVA';
window.USER_BACKUP_FILENAME = 'girlygymdolph-backup.json';
