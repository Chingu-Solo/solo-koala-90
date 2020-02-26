# Favourite Fonts - tier2

The app is a fully developed front-end app created for the Chingu Solo Project. By configuring the Google Fonts API, allowing users to search, test, and play around with their favourite fonts.

#### [Demo](https://elegant-kalam-dc4d3a.netlify.com/) - working in progress

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

- [x] Toggle dark/light mode
- [x] Search a font name and display all matched fonts with their own styling
- [x] Change the display of fonts (grid/list layout)
- [x] Add fonts into a list also can be deleted from the list (localStorage)
- [x] Sample texts are immediately changed depending on font-size and a set of custom text message
- [x] The displaying fonts are sorted by popularity
- [x] A reset button
- [x] A back to top button
- [x] A toggleable sidebar
- [x] Fully responsive website design
- [x] Lazily loading font family

## Built With

- [React](https://github.com/facebook/react) - The web framework used
- [Google Fonts API](https://developers.google.com/fonts/docs/developer_api)
- [axios](https://**github**.com/axios/axios) - Promises handling used
- [material-ui](https://material-ui.com/)
