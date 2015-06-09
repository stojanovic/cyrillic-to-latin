var test = require('tape')
var converter = require('../cyrillicToLatin')

test('Cyrillic to latin conversion test', function (t) {
  t.plan(2)
  
  t.equal(converter('Ћирилица је писмо које користи седам словенских језика (белоруски, бугарски, македонски, руски, српски, украјински и де јуре бошњачки)'),
                    'Ćirilica je pismo koje koristi sedam slovenskih jezika (beloruski, bugarski, makedonski, ruski, srpski, ukrajinski i de jure bošnjački)')
  
  t.equal(converter('Около 863 года братья Кирилл и Мефодий из Солуни (Салоники) по приказу византийского императора Михаила III упорядочили письменность для славянского языка.'),
                    'Okolo 863 goda bratʹâ Kirill i Mefodij iz Soluni (Saloniki) po prikazu vizantijskogo imperatora Mihaila III uporâdočili pisʹmennostʹ dlâ slavânskogo âzyka.')
})
