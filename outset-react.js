#!/usr/bin/env node

'use strict'

const fs = require('fs-extra')

const path = process.argv[2] || '.'

const CWD  = process.cwd() + '/' + path
const FROM = __dirname + '/lib'

fs.copy(FROM, CWD, function(error) {
  if(error) console.log(error)

  // rename .gitignore
  fs.renameSync(CWD + '/gitignore', CWD + '/.gitignore')
})
