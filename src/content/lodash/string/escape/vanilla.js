const escape = str => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }
  return str.replace(/[&<>"']/g, m => map[m])
}

module.exports = escape('fred, barney, & pebbles')
// => 'fred, barney, &amp; pebbles'
