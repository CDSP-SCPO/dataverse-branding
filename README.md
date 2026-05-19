# Sciences Po branding for Dataverse

This repo contains files to customize the appearance of Dataverse for Sciences Po. This includes a custom multilingual homepage built with Vue.js and a custom stylesheet using SCSS.  
This could be used as a base for other installations branding

## Environment files

The builds rely on Vite environment files at the root of the repo. Create them before building:

`.env.prod`:
```
VITE_LOGIN_URL=https://data.sciencespo.fr/loginpage.xhtml
```

`.env.pprd`:
```
VITE_LOGIN_URL=https://datapprd.sciencespo.fr/loginpage.xhtml
```

These files are git-ignored and must be created manually on each machine.

## Development

- To watch all scss for development, run `npm run watch`
- To watch only the dataverse scss for development, run `npm run watch:dv`
- To serve the homepage for development, run `npm run dev`
- To build the homepage + css for pré-production, run `npm run build:pprd`
- To build the homepage + css for production, run `npm run build:prod`

## Explanation of dist files:

- `dist/css/dv-custom.css`: the custom stylesheet (see http://guides.dataverse.org/en/latest/installation/config.html#custom-stylesheet)
- `dist/index.html`: the homepage (see http://guides.dataverse.org/en/latest/installation/config.html#custom-homepage)

## Disclaimer

This method could be considered a hack since we totally replace the homepage using javascript and use a lot of `!important` in the stylesheet.
