[![Build Status](https://travis-ci.org/stojanovic/cyrillic-to-latin.svg)](https://travis-ci.org/stojanovic/cyrillic-to-latin) [![npm version](https://badge.fury.io/js/cyrillic-to-latin.svg)](http://badge.fury.io/js/cyrillic-to-latin)

# Cyrillic to latin converter

Converts characters cyrillic to latin.

At the moment it works with Serbian characters only, but goal is to support full [ISO 9:1995](http://en.wikipedia.org/wiki/ISO_9) standard.

# Installation

`npm install cyrillic-to-latin`

# Usage

```

var convert = require('cyrillic-to-latin')

convert('Ћирилица је писмо које користи седам словенских језика (белоруски, бугарски, македонски, руски, српски, украјински и де јуре бошњачки)')

// Returns:
// Ćirilica je pismo koje koristi sedam slovenskih jezika (beloruski, bugarski, makedonski, ruski, srpski, ukrajinski i de jure bošnjački)

```

# Test

`npm test` or `tape test/*.js` or `browserify -t coverify test/*.js | node | coverify -c | tap-spec` (for test with coverage).

# Todo

- [ ] Support Russian alphabet
- [ ] Support full ISO 9:1995
- [ ] Support reverse conversion (latin to cyrilic)

# Licence

MIT
