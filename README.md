# Kind
KIND Child Portal developed in Typescript.The childportal is mobile-first and contains basic information like Your Rights,Your Responsibilities and a Preparation Plan. The content is served in English and Spanish.

## Getting started
Install the packages by running the npm i command
- `npm i`

## Running local environment
- `npm start`

## Deploy site to Github Pages
- `npm run deploy`


## For Adding Content
For additional content, modify the values in the strings.tsx. Add values to the variables preparationPlan,yourResponsibilities, yourRights, kidsLikeYou. To add a new logo, include the svg as a component under src\components and then export the component in src\components\index.ts

## For Developers
The project uses a React UI framework available at https://github.com/microsoft/fast-dna/blob/master/README.md. The pages are not yet responsive and built for mobile version as the primary consumers of the information view content on ,mobile devices.

*TODO:* When the menu is open and you want to navigate to the page currently behind the menu the only way to access the page would be to close the menu at the X in the top left corner.  It would be more intuitive to be able to select any page from the menu and have the menu close`

*TODO:* On some aspect ratios, the slide indicator on the carousel (small circles at bottom) will appear off the blue background due to the negative relative positioning. This could most likely be fixed by added margin to the carousel div.

