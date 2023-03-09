const deburr = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

module.exports = deburr('déjà vu')
// 'deja vu'
