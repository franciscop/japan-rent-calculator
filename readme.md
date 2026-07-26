# Japan Rent Calculator

Work out what an apartment in Japan really costs per month. Japanese leases pile one-off charges
on top of the advertised rent: key money (礼金) you never get back, a deposit (敷金), the agency
fee, a guarantor company fee, fire insurance, a renewal fee every couple of years. A place listed
at 80,000 yen can easily cost well over 100,000 a month once those are spread across a stay.

Enter the numbers from the listing and how long you plan to stay, and it amortises everything into
a real monthly average, which is the figure that lets you compare two apartments honestly. The
shorter the stay, the more those up-front fees hurt, and that is exactly what the calculator makes
visible.

Live at [japan-rent-calculator.com](https://japan-rent-calculator.com/).

## Layout

A static site with no `package.json`, no dependencies, no build step and no server. Deployed
straight from the repo by GitHub Pages, with `CNAME` mapping the custom domain:

| File | Purpose |
| --- | --- |
| `index.html` | The calculator |
| `script.js` | The maths |
| `style.css` | Styles, on top of [Picnic CSS](https://picnicss.com/) from unpkg |
| `social.jpg` | Share card, doubling as the page background on wide screens |
| `favicon.png` | The 🈷️ icon |
| `manifest.json` | PWA manifest |

## Running locally

Open `index.html` directly, or serve the folder:

```bash
bunx serve
```

## Notes

- Asset URLs in the `<head>` are absolute (`https://japan-rent-calculator.com/...`), which is
  deliberate, but it means the favicon and share images will not resolve when previewing from a
  different host.
- `theme-color` is `#f4900c`, sampled from the favicon's orange.
