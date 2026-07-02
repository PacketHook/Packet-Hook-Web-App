# Packet Hook — Web App

Static features-showcase site (ZeroHub-style): a grid of supported games, each
opening a modal listing its features by category.

## Editing content

All games and features live in **`games.js`**. Add a game by appending an object
to the `GAMES` array:

```js
{
  name: "Game Name",
  image: "https://.../cover.png", // or "" for a blank placeholder
  pricing: "PAID",                // or "FREE"
  features: [
    { title: "Category", items: ["Feature A", "Feature B"] },
  ],
}
```

The site re-renders everything (card grid, game count, feature counts) from this
array automatically — no other files to touch.

## Local preview

Just open `index.html` in a browser, or:

```bash
python -m http.server 8080
```

## Deploy (Netlify)

Pure static site, no build. In Netlify: **Add new site → Import from GitHub →**
pick `PacketHook/Packet-Hook-Web-App`. `netlify.toml` sets publish dir to repo
root with no build command. Every push to `main` auto-deploys.
