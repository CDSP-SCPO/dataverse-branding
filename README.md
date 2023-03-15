# Sciences Po branding for Dataverse

This repo contains files to customize the appearance of Dataverse for Sciences Po. This includes a custom multilingual homepage built with Vue.js and a custom stylesheet using SCSS.  
This could be used as a base for other installations branding

- To watch all scss for development, run `npm run watch`
- To watch only the dataverse scss for development, run `npm run watch:dv`
- To serve the homepage for development, run `npm run dev`
- To build the homepage + css for production, run `npm run build`

## Explanation of dist files:

- `dist/css/dv-custom.css`: the custom stylesheet (see http://guides.dataverse.org/en/latest/installation/config.html#custom-stylesheet)
- `dist/index.html`: the homepage (see http://guides.dataverse.org/en/latest/installation/config.html#custom-homepage)

## Disclaimer

This method could be considered a hack since we totally replace the homepage using javascript and use a lot of `!important` in the stylesheet.
