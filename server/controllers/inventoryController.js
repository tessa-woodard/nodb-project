const critters = require('./data.json')

const inventory = { total: 0, items: [] }
let inventoryId = 0

const updateInventoryTotal = () => {
    const total = inventory.items.reduce((acc, element) => {
        return acc + element.price * element.quantity
    }, 0)

    inventory.total = total.toFixed(0)
}

module.exports = {
    getInventory: (req, res) => {
        res.status(200).send(inventory)
    },

    addToInventory: (req, res) => {
        const { critterId, quantity } = req.body

        const index = inventory.items.findIndex((element) => element.id === +critterId)

        if (index === -1) {
            const critter = critters.find((element) => element.id === +critterId)

            critter.inventoryId = inventoryId
            critter.quantity = +quantity

            inventory.items.push(critter)

            inventoryId++
        } else {
            inventory.items[index].quantity += +quantity
        }

        updateInventoryTotal()

        res.status(200).send(inventory)
    },


    changeQuantity: (req, res) => {
        const { inventory_id } = req.params
        const { action } = req.query

        const index = inventory.items.findIndex((element) => element.inventoryId === +inventory_id)

        if (index === -1) {
            return res.status(404).send('Critter not in inventory')
        }

        if (action === 'up') {
            inventory.items[index].quantity += 1
        } else {
            if (inventory.items[index].quantity > 1) {
                inventory.items[index].quantity -= 1
            } else {
                inventory.items.splice(index, 1)
            }
        }
        updateInventoryTotal()

        res.status(200).send(inventory)
    },

    removeFromInventory: (req, res) => {
        const { inventory_id } = req.params

        const index = inventory.items.findIndex((element) => element.inventoryId === +inventory_id)

        if (index === -1) {
            return res.status(404).send('Critter not in inventory')
        }

        inventory.items.splice(index, 1)

        updateInventoryTotal()

        res.status(200).send(inventory)
    },

    finalize: (req, res) => {
        inventory.total = 0
        inventory.items = []

        res.status(200).send(inventory)
    },

}
