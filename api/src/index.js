const express = require('express')
const mysql = require('mysql')

const app = express()

const connection = mysql.createConnection({
  host: '172.17.0.2',
  user: 'root',
  password: 'programadorabordo',
  database: 'programadorabordo'
})

connection.connect()

app.get('/products', (req, res) => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) {
      throw err
    }

    const products = results.map(item => ({ name: item.name, price: item.price }))

    res.send(products)
  })
})

app.listen(9001, '0.0.0.0', () => {
  console.log('Listening on port 9001')
})