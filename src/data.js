export const clinic = {
  name: 'Olzha Dent',
  city: 'Алматы',
  address: 'улица Байтурсынова, 9, 8 кабинет, 1 этаж, Алмалинский район, Алматы, 050000/A05B8G6',
  shortAddress: 'ул. Байтурсынова, 9, каб. 8, 1 этаж',
  district: 'Алмалинский район',
  phoneMain: '+7 (727) 233-13-48',
  phoneMainHref: 'tel:+77272331348',
  phoneAlt: '+7 707 400 56 74',
  phoneAltHref: 'tel:+77074005674',
  whatsapp: '+7 707 400 56 74',
  whatsappHref: 'https://wa.me/77074005674?text=' + encodeURIComponent('Здравствуйте! Хочу записаться на бесплатную консультацию в Olzha Dent.'),
  instagram: '@olzhadent.kzz',
  instagramHref: 'https://instagram.com/olzhadent.kzz',
  rating: '4.9',
  reviews: '395',
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('улица Байтурсынова, 9, 8 кабинет, 1 этаж, Алмалинский район, Алматы, 050000/A05B8G6'),
};

export function waLink(msg) {
  return `https://wa.me/77074005674?text=${encodeURIComponent(msg)}`;
}
