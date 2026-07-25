# Japan Rent Calculator

Works out the true monthly cost of renting in Japan. Japanese leases pile on one-off
charges — key money (礼金), deposit (敷金), agency fee, guarantor fee, renewal fee — so the
advertised rent understates what you actually pay. Enter the numbers and the length of your
stay, and it amortises everything into a real monthly average.

Live at [japan-rent-calculator.com](https://japan-rent-calculator.com/).

## Layout

Pure static site — no `package.json`, no dependencies, no build step, no server. Deployed
straight from the repo by GitHub Pages, with `CNAME` mapping the custom domain:

| File | Purpose |
| --- | --- |
| `index.html` | The calculator |
| `script.js` | The maths |
| `style.css` | Styles, on top of [Picnic CSS](https://picnicss.com/) from unpkg |
| `social.jpg` | Share card, doubling as the page background on wide screens |
| `favicon.png` | 🈷️ icon, 1024×1024 |
| `manifest.json` | PWA manifest — all icon sizes point at the one `favicon.png` |

## Running locally

Open `index.html` directly, or serve the folder:

```bash
bunx serve
```

## Notes

- Asset URLs in the `<head>` are absolute (`https://japan-rent-calculator.com/...`), which
  is deliberate but means the favicon and share images won't resolve when previewing from a
  different host.
- `theme-color` is `#f4900c`, sampled from the favicon's orange.
