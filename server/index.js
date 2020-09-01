const express = require('express')
const app = express()
const critterCtrl = require('./controllers/crittersController')
const inventoryCtrl = require('./controllers/inventoryController')

const SERVER_PORT = 7000

app.use(express.json())

app.get('/api/critters', critterCtrl.getAllCritters)

app.get('/api/inventory', inventoryCtrl.getInventory)
app.post('/api/inventory', inventoryCtrl.addToInventory)
app.put('/api/inventory/:inventory_id', inventoryCtrl.changeQuantity)
app.delete('/api/inventory/:inventory_id', inventoryCtrl.removeFromInventory)
app.delete('/api/inventory', inventoryCtrl.finalize)

app.listen(SERVER_PORT, () =>
    console.log(`Nook's Cranny is open! ${SERVER_PORT}`)
)