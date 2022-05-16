# CUSTOM NEON APP

Turn your text into a custom neon light and lit up your place with neon induced aura!

Vist: [Client website](...)

## Note for developer and clients

Plz _beware_ of the licensing issue for the custom fonts.
Check out the links below for the licensing of the fonts used here that requires licensing for commercial use.

- [Amsterdam](https://www.cdnfonts.com/amsterdam-2.font)

- [Amanda](https://www.cdnfonts.com/amanda.font)

### features -

- Type your text < 20 character
- Choose from the range of 8 google fonts
- set the color between 12 unique colors
- Pricing is based on the characters, so basically the width.
- a switch to turn the neon and off

## :bug: BUGS

---

- unpredictable behaviour, sometimes one of the font does not get render on the canvas, nor the computed style for width of the `<span class= "measurementBar-width">` based on which the measuremnt bar is changed. After while this does not happen, most noticeable upon first load. Usually appears within first 4 or 5 clicks on the font family. 😬

### Some of the technical aspect i have implemented in this version of the webApp (almost)

---

- Debouncing algorithm -- to purposefully save resources and time therefore good optimization and speed.

- One of the most trickiest and challenging part was to get the height of each characters, which i did with the help of masking a canvas.

- Dynamic calculation of price and dimensions

- Responsiveness ensure to adapt to all of the devices out there.
