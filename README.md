# The First Tech Coyotes Website

Welcome to the web page for FTC Team 6406, First Tech Coyotes!
This project is built using TypeScript, React, Vite, and Tailwind.

- [Getting started](#getting-started)
- [Previewing](#previewing)
- [Deploying](#deploying)
- [Gallery](#gallery)
- [Acknowledgments](#acknowledgments)

## Getting started

After cloning the directory, run `npm install`. It will install the necessary packages.
Do not touch the `gh-pages` branch. That is where our website is deployed.

## Previewing

When previewing your changes, run `npm run dev`. It will update the website every time you change the code.

## Deploying

To build and deploy the website, run `npm run deploy` from the [root directory(`./`)](./).

> [!Warning]
> Do **not** deploy the website until you are done with your changes and are ready for them to be made public.
> Learned the hard way.

## Gallery

The gallery images are controlled by a JSON file called [`gallery.json`](./public/gallery.json).
It contains an array of the images that are displayed in the gallery.
Each element of the array is an object with 1 to 4 properties: `"image"`, `"title"`, `"body"`, and `"background"`.
The last three are optional. If they are missing, the website will default to `""`, `""`, and false, respectively.

`"image"` contains the file path to the image, but excluding `/public`.

`"title"` and `"body"` are self explanatory.

`"background"` controls whether the image will have a black box underneath to display text or the text will be superimposed over the image.
`"true"` will set the image to have a black box underneath. `"false"` will not.

## Acknowledgments

- [hero_placeholder.jpg](/public/assets/hero_placeholder.jpg) - By [Trendy Express](https://500px.com/trendyexpress). From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Man_Atop_A_Mountain_(187811195).jpeg). This file is made available under the [Creative Commons CC0 1.0 Universal Public Domain Dedication](https://creativecommons.org/publicdomain/zero/1.0/deed.en). This file has not modified in any way, shape, or form.
- [placeholder.jpg](/public/assets/gallery/placeholder.jpg) - © Vyacheslav Argenberg / <http://www.vascoplanet.com/>. From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Himalayas,_Ama_Dablam,_Nepal.jpg). This file is licensed under the [Creative Commons Attribution 4.0 International license](https://creativecommons.org/licenses/by/4.0/deed.en). This file has not modified in any way, shape, or form.
- [placeholder1.jpg](/public/assets/gallery/placeholder1.jpg) - By [Z thomas](https://commons.wikimedia.org/wiki/User:Z_thomas). From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:WTB_20220723_Ulrichsberg_Aussichtsturm_Alpenblick_9792.jpg). This file is licensed under the [Creative Commons Attribution-Share Alike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/deed.en). This file has not been modified in any way, shape, or form.
- [placeholder2.jpg](/public/assets/gallery/placeholder2.jpg) - By [Giles Laurent](https://commons.wikimedia.org/wiki/User:Giles_Laurent).
  From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:001_Golden_jackal_and_azureum_flowers_in_Jim_Corbett_National_Park_Photo_by_Giles_Laurent.jpg). This file is licensed under the [Creative Commons Attribution-Share Alike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/deed.en). This file has not been modified in any way, shape, or form.
- [placeholder3.jpg](/public/assets/gallery/placeholder3.jpg) - By [Ans~jawiki](https://ja.wikipedia.org/wiki/%E5%88%A9%E7%94%A8%E8%80%85:Ans~jawiki) at the [Japanese language Wikipedia](https://ja.wikipedia.org/wiki/). From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Lycoris_radiata_Ans1.jpg). This file is licensed under the [Creative Commons Attribution-Share Alike 3.0 Unported license](https://creativecommons.org/licenses/by-sa/3.0/deed.en). This file has not been modified in any way, shape, or form.
- [placeholder4.jpg](/public/assets/gallery/placeholder4.jpg) - © [Friedrich Haag](https://commons.wikimedia.org/wiki/User:F._Riedelio) / [Wikimedia Commons](https://commons.wikimedia.org/wiki/Main_Page) / [“Dampf 003 2020 02 13”](https://commons.wikimedia.org/wiki/File:Dampf_003_2020_02_13.jpg) / [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). This file has not been modified in any way, shape, or form.
- [placeholder5.jpg](/public/assets/gallery/placeholder5.jpg) - By [Rhododendrites](https://commons.wikimedia.org/wiki/User:Rhododendrites). From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Waterworks_Museum_-_defunct_Chestnut_Hill_Pumping_Station_(85495s)bw.jpg). This file is licensed under the [Creative Commons Attribution-Share Alike 4.0 International license](https://creativecommons.org/licenses/by-sa/4.0/deed.en). This file has not been modified in any way, shape, or form.
