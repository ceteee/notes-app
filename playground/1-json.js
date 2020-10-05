const fs = require('fs')

const dataBuffer= fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = 'Christian'
data.planet = 'Mars'
data.age = '21'

const overData = JSON.stringify(data)
fs.writeFileSync('1-json.json' ,overData)


