const marked = require('marked')
const fs = require('fs')

const input = fs.createReadStream('input.md', 'utf8')

let inputText = ''

input.on('data', chunk => {
  inputText += chunk
  input.on('end', () => {
    fs.writeFile('output.html', marked.parse(inputText), err => {
      if (err) console.log(err)
    })
  })
})





