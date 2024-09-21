const path = require('path');

module.exports = {
  mode: 'development',  // Setează modul la 'development' sau 'production'
  entry: './main.js',  // punctul de intrare
  output: {
    filename: 'bundle.js',  // fișierul de ieșire
    path: path.resolve(__dirname, 'dist'),  // directorul în care va fi salvat bundle-ul
  },
};
