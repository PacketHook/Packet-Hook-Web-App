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
    name: "ABA",
    image: "",
    pricing: "PAID",
    features: [
      {
        title: "Auto Equip",
        items: [
          "Auto Equip Next",
          "Fetch Character Data",
          "Equip Selected",
          "Add To Priority List",
          "Clear Priority List",
          "View Priority List",
          "Refresh Players",
        ],
      },
      {
        title: "Farm Controls",
        items: [
          "Auto Farm",
          "Auto Dodge",
          "Auto Skill",
          "Kill Aura",
        ],
      },
    ],
  },
  {
    name: "Type Soul",
    image: "",
    pricing: "PAID",
    features: [
      {
        title: "Combat",
        items: ["Auto Farm", "Kill Aura", "Auto Parry", "Reach"],
      },
      {
        title: "Misc",
        items: ["Auto Quest", "Server Hop", "Fast Travel"],
      },
    ],
  },
  {
    name: "Pilgrammed",
    image: "",
    pricing: "PAID",
    features: [
      {
        title: "Combat",
        items: ["Aimbot", "Auto Attack", "Hitbox Expander"],
      },
      {
        title: "Player",
        items: ["Fly", "Speed", "Noclip"],
      },
    ],
  },
  {
    name: "Evomon",
    image: "",
    pricing: "FREE",
    features: [
      {
        title: "Farm",
        items: ["Auto Catch", "Auto Battle", "Auto Explore"],
      },
    ],
  },
  {
    name: "Kaizen",
    image: "",
    pricing: "PAID",
    features: [
      {
        title: "Combat",
        items: ["Kill Aura", "Auto Farm", "Aimbot"],
      },
    ],
  },
];
