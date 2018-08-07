const fetch = require('node-fetch')
const FormData = require('form-data')

const formData = new FormData()
formData.append('action', 'send')
formData.append('user', process.env.NO_USERNAME)
formData.append('pass', Buffer
  .from(process.env.NO_PASSWORD, 'base64')
  .toString('ascii')
)
formData.append('format', 'json')
formData.append('dest', process.env.NO_DESTINATOR)
formData.append('msg', 'Esteban Sotillo \nhttps://github.com/westixy/netOxygen-SMS-test (public)')

fetch(process.env.NO_API_ENDPOINT, {
  method: 'POST',
  body: formData
})
.then(r=>r.json())
.then(console.log)
.catch(console.error)