# Richmond Liquor - Website

Website for Richmond Liquor, a neighborhood liquor store on Richmond Avenue in West Houston, Texas.

Single-page React + Vite site. Logo-only photo hero, a "What we carry" category grid, a wholesale band for clubs and venues, and a compact Find us section with the store address, phone, and hours.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
```

## Project layout

- `src/App.tsx` - the whole page (hero, categories, wholesale, visit)
- `src/style.css` - all styles
- `src/assets/` - logo artwork (SVG sources + rasterized PNGs; black-and-white, color, and inverted variants)
- `src/photos/` - photography (see credits below)

## Store details used on the page

- 9376 Richmond Ave, Suite A, Houston, TX 77063
- (713) 789-5348
- Monday-Saturday, 10 AM-9 PM; closed Sunday

Confirm hours and category wording with the store before treating them as final.

## Logo

The Richmond Liquor sign logo is original artwork created for the store and approved by the store. Keep the geometry unchanged; use the provided variants (`logo-sign-bw` is the primary, `logo-sign` the color original, `logo-sign-bw-inverted` for dark backgrounds).

## Photo credits

All photos are stock stand-ins from Pexels (free to use under the Pexels license, https://www.pexels.com/license/). They are not photos of the actual store. Replace with real store photography when available.

| File | Pexels photo |
| --- | --- |
| `src/photos/hero-glasses.jpg` | https://www.pexels.com/photo/36322546/ |
| `src/photos/whiskey-glass.jpg` | https://www.pexels.com/photo/28559493/ |
| `src/photos/beer-tap.jpg` | https://www.pexels.com/photo/33924061/ |
| `src/photos/wine-cellar.jpg` | https://www.pexels.com/photo/19714331/ |
| `src/photos/barrels.jpg` | https://www.pexels.com/photo/5489474/ |

## Notes

- No online ordering, payments, forms, or analytics by design.
- The Oswald display font loads from Google Fonts; everything else is self-contained.
