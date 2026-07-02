/* =========================================================================
   Packet Hook — game & feature data
   -------------------------------------------------------------------------
   EDIT THIS FILE to add/remove games and features. Nothing else needs to
   change — the site renders everything from this array automatically.

   Each game:
     name    : display name
     image   : cover image URL (or "" for a placeholder)
     pricing : "PAID" or "FREE"
     features: array of groups; each group has a title + list of feature names
   ========================================================================= */

const GAMES = [
  {
    name: "Universal Tower Defense X",
    image: "https://tr.rbxcdn.com/180DAY-aa82fb202c81683327367b111b615629/768/432/Image/Webp/noFilter",
    pricing: "PAID",
    features: [
      {
        title: "Macro",
        items: [
          "Create Macro File",
          "Select / Delete Macro",
          "Equip Macro Units",
          "Record Macro",
          "Playback Macro",
          "Play By Wave / Time",
          "Delay Between Steps",
        ],
      },
      {
        title: "Macro Recording",
        items: [
          "Record Unit Placement",
          "Record Upgrades",
          "Record Universal Path Upgrades",
          "Record Priority Changes",
          "Record Unit Selling",
          "Record Ability Usage",
          "Boss Ability Timing",
        ],
      },
      {
        title: "Macro Specific Map",
        items: [
          "Per-Category Macro Selection",
          "Per-Map Macro Assignment",
          "Challenge Map Support",
          "Auto Yen Waiting",
        ],
      },
      {
        title: "Auto Join Map",
        items: [
          "Select Category / Map / Act",
          "Select Difficulty",
          "Friends Only",
          "Global Matchmaking",
          "Auto Join Map",
        ],
      },
      {
        title: "Auto Join Challenge",
        items: [
          "Select Challenge Type",
          "Ignore Challenge Maps",
          "Ignore Modifiers",
          "Friends Only",
          "Global Matchmaking",
          "Auto Join Challenge",
        ],
      },
      {
        title: "Game Features",
        items: [
          "Auto Start",
          "Auto Skip Wave",
          "Auto Replay",
          "Auto Next",
          "Auto Leave",
        ],
      },
      {
        title: "Extra",
        items: [
          "Extra Features",
          "Webhook Notifications",
          "UI Settings",
        ],
      },
    ],
  },
  {
    name: "Packet Hook External",
    image: "images/packet-external.png",
    pricing: "PAID",
    features: [
      {
        title: "Supported Games",
        items: [
          "All Shooting games",
          "Playground Basketball",
        ],
      },
    ],
  },
];
