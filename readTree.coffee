fs = require('fs')

readFileTree = require('readfiletree')

toIgnore = [ 'reference.txt' ]

get = (cb) ->
  readFileTree 'comparisons/', (err, tree) ->
    if err
      cb(err)
      return

    out = {}

    for title, comps of tree
      if title.startsWith '.'
        break

      if toIgnore.includes title
        break

      out[title] = {}

      for name, comp of comps
        if name.startsWith '.'
          break

        if name is 'support.txt'
          name = '_support'

        out[title][name] = {}

        if typeof comp isnt 'string'
          for filename, code of comp
            [version, ext] = filename.split '.'

            out[title][name][version] ?= {}
            out[title][name][version][ext] = code
        else
          out[title][name] = comp

    cb null, out

module.exports = get
