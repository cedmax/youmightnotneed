const deburr = str => str.normalize('NFD').replace(/\p{Diacritic}/gu, '')

exports.simple = deburr('déjà vu')
// 'deja vu'

// String#normalize only supports a subset of
// the _.deburr conversions. For more information
// have a look at the documentation on MDN.
// You might be fine with the out of the box support
// but this implementation also covers adding a range
// of extra characters (disclaimer: the list presented
// here might not be comprehensive)

const charMap = {
  'oe': 'œ',
  'ae': 'æ',
  'Ae': 'Æ',
  'Oe': 'Œ',
  'D': 'Ð|D|Đ',
  'd': 'ð|d|đ',
  'H': 'Ħ',
  'h': 'ħ',
  'I': 'İ',
  'i': 'ı',
  'k': 'ĸ',
  'L': 'Ŀ|Ł',
  'l': 'ŀ|ł',
  'N': 'Ŋ',
  'n': 'ŋ',
  'O': 'Ø',
  'o': 'ø',
  's': 'ſ',
  'T': 'Ŧ',
  't': 'ŧ',
  'Th': 'Þ',
  'th': 'þ',
  'ss': 'ß',
  'IJ': 'Ĳ',
  'ij': 'ĳ',
}

const removeExtraChars = str =>
  Object.entries(charMap).reduce((str, [normalised, specialChar]) => {
    var re = new RegExp(specialChar, 'g')
    str = str.replace(re, normalised)
    return str
  }, str)

const extendedDeburr = str => removeExtraChars(deburr(str))

// prettier-ignore
const specialChars =['ä','æ','ö','œ','ü','Ä','Æ','Ü','Ö','Œ','À','Á','Â','Ã','Ä','Å','Ā','Ă','Ą','à','á','â','ã','å','ā','ă','ą','Ç','Ć','Ĉ','Ċ','Č','ç','ć','ĉ','ċ','č','Ð','Ď','Đ','ð','ď','đ','È','É','Ê','Ë','Ē','Ĕ','Ė','Ę','Ě','è','é','ê','ë','ē','ĕ','ė','ę','ě','Ĝ','Ğ','Ġ','Ģ','ĝ','ğ','ġ','ģ','Ĥ','Ħ','ĥ','ħ','Ì','Í','Î','Ï','Ĩ','Ī','Ĭ','Į','İ','ì','í','î','ï','ĩ','ī','ĭ','į','ı','Ĵ','ĵ','Ķ','ķ','ĸ','Ĺ','Ļ','Ľ','Ŀ','Ł','L','ĺ','ļ','ľ','ŀ','ł','Ñ','Ń','Ņ','Ň','Ŋ','ñ','ń','ņ','ň','ŋ','Ò','Ó','Ô','Õ','Ō','Ŏ','Ő','Ø','ò','ó','ô','õ','ō','ő','ø','Ŕ','Ŗ','Ř','ŕ','ŗ','ř','Ś','Ŝ','Ş','Š','ś','ŝ','ş','š','ſ','Ţ','Ť','Ŧ','ţ','ť','ŧ','Ù','Ú','Û','Ũ','Ū','Ŭ','Ů','Ű','Ų','ù','ú','û','ũ','ū','ŭ','ů','ű','ų','Ý','Ÿ','Ŷ','ý','ÿ','ŷ','Ŵ','ŵ','Ź','Ż','Ž','ź','ż','ž','Þ','þ','Æ','ß','Ĳ','ĳ']
exports.complex = specialChars.map(extendedDeburr)
// ['a','ae','o','oe','u','A','Ae','U','O','Oe','A','A','A','A','A','A','A','A','A','a','a','a','a','a','a','a','a','C','C','C','C','C','c','c','c','c','c','D','D','D','d','d','d','E','E','E','E','E','E','E','E','E','e','e','e','e','e','e','e','e','e','G','G','G','G','g','g','g','g','H','H','h','h','I','I','I','I','I','I','I','I','I','i','i','i','i','i','i','i','i','i','J','j','K','k','k','L','L','L','L','L','L','l','l','l','l','l','N','N','N','N','N','n','n','n','n','n','O','O','O','O','O','O','O','O','o','o','o','o','o','o','o','R','R','R','r','r','r','S','S','S','S','s','s','s','s','s','T','T','T','t','t','t','U','U','U','U','U','U','U','U','U','u','u','u','u','u','u','u','u','u','Y','Y','Y','y','y','y','W','w','Z','Z','Z','z','z','z','Th','th','Ae','ss','IJ','ij']
