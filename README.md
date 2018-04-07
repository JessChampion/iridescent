# Iridescent background effects

Experimenting with css animation for background effects.

demo: https://jesschampion.github.io/iridescent/

## Development

### Setup 
Install node and yarn.
Run `yarn` to install dependencies.

### Build and deploy
Build output is stored in the `dist` folder.

The following yarn scripts are available for build and deploy:  
-   `yarn build`: build for your dev environment.  
-   `yarn watch`: build for your dev environment and watch for changes.  
-   `yarn package`: build for production - minified etc.
-   `yarn deploy`: push dist folder to gh-pages branch. 
     Before deploying: build with `yarn package`, then commit the built assets and push to master.
    _Note: If github pages is set up on your repository this will update it with your latest changes._
    
### Code style 
Linters have been set up to enforce consistent code style and practices for javascript and scss code.
These can be integrated into your IDE  or run manually with the following yarn scripts:  
- `yarn: lint`: lint both javascript and scss code
- `yarn: lint:es`: lint javascript code
- `yarn: lint:style`: lint scss code   

### Routing
Routing is handled by vue router, and configured in `src/router/index.js`

### Styling
All styling is written in scss format.
Most styling should be handed a scoped style section of relevant vue component.
Some utility classes and root styles are defined globally.

#### Global variables
Global variables are defined in `src/style/_config.scss` these can be into the scope style sections.
This will give you access to all variables as well as all mixins and functions.

##### Mixins and function
A number of sass mixins and functions are defined in `src/style/_mixins.scss` and `src/style/_functions.scss` respectively.
These are imported through the global variable config.

##### Media queries
Mixins for creating media queries for the defined screen sizes are defined in `src/style/_mixins.scss`.

#### Global styling
Some global styles are defined in `src/style/global.scss`.
These are compiled by mix and imported into the page header.

##### Icons
Icon classes are defined in `src/style/_icons.scss` and imported globally.
Icon files must be in the `src/style/icons` folder and the file name must be added to the list in `_icons.scss`. 
Icons then then be applied by adding the `icon` `icon--name` classes directly to the element or by @extend.

There are also some modifier classes for transforming the icons defined in `_icons.scss`.

##### Transitions
CSS transitions for vue transition components are defined in `src/style/_transitions.scss` and imported globally.

##### Utilities
Some CSS utility classes are defined in `src/style/_utility.scss` and imported globally.

