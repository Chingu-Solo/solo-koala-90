# Favourite Fonts - tier2

The app is a fully developed front-end app created for the Chingu Solo Project. By configuring the Google Fonts API, allowing users to search, test, and play around with their favourite fonts.

## Prerequisites

Replace the `GOOGLE_FONTS_API_KEY` with `YOUR_API_KEY`

```javascript
axios.get(
  `https://www.googleapis.com/webfonts/v1/webfonts?key=${process.env.REACT_APP_GOOGLE_FONTS_API}`
);
```

Create a `.env` file in the root of the app

```javascript
REACT_APP_GOOGLE_FONTS_API = GOOGLE_FONTS_API_KEY;
```

### Install

```javascript
npm install
```

## Functionality

- [ ] Toggle dark/light mode
- [ ] Search a font name and display all matched fonts with their own styling
- [ ] Change the display of fonts (grid/list layout)
- [ ] Add fonts into a list also can be deleted from the list (localStorage)
- [ ] Sample texts are immediately changed depending on font-size and a set of custom text message
- [ ] The displaying fonts are sorted by popularity
- [ ] A reset button
- [ ] A back to top button
- [ ] Fully responsive website design

## Built With

- [React](https://github.com/facebook/react) - The web framework used
- [Google Fonts API](https://developers.google.com/fonts/docs/developer_api)
- [axios](https://github.com/axios/axios) - Promises handling used
- [material-ui](https://material-ui.com/)
