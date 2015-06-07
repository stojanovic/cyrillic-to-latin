var test = require('tape')
var converter = require('../cyrillicToLatin')

test('Cyrillic to latin conversion test', function (t) {
  t.plan(1)
  
  t.equal(converter('Ћирилица је писмо које користи седам словенских језика (белоруски, бугарски, македонски, руски, српски, украјински и де јуре бошњачки)'), 'Ćirilica je pismo koje koristi sedam slovenskih jezika (beloruski, bugarski, makedonski, ruski, srpski, ukrajinski i de jure bošnjački)')
})
