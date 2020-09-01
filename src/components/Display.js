import React, { Component } from 'react'
import Critters from './Critters'
import Inventory from './Inventory'
import axios from 'axios'

class Display extends Component {
    constructor() {
        super()
        this.state = {
            critters: [],
            inventory: { total: 0, items: [] },
        }
        this.addToInventory = this.addToInventory.bind(this)
        this.changeQuantity = this.changeQuantity.bind(this)
        this.removeFromInventory = this.removeFromInventory.bind(this)
        this.finalize = this.finalize.bind(this)
    }

    componentDidMount() {
        axios.get('/api/critters').then((res) => {
            axios.get('/api/inventory').then((inventoryRes) => {
                this.setState({
                    critters: res.data,
                    inventory: inventoryRes.data,
                })
            })
        })
    }

    addToInventory(critterId, quantity) {
        axios.post('/api/inventory', { critterId, quantity }).then((res) => {
            this.setState({
                inventory: res.data,
            })
        })
    }

    changeQuantity(inventoryId, action) {
        axios.put(`/api/inventory/${inventoryId}?action=${action}`).then((res) => {
            this.setState({
                inventory: res.data,
            })
        })
    }

    removeFromInventory(inventoryId) {
        axios.delete(`/api/inventory/${inventoryId}`).then((res) => {
            this.setState({
                inventory: res.data,
            })
        })
    }

    finalize() {
        axios.delete('/api/inventory/').then((res) => {
            this.setState({
                inventory: res.data,
            })
        })
    }

    render() {
        return (
            <div className="display">
                <Critters addToInventory={this.addToInventory} critters={this.state.critters} />
                <Inventory
                    changeQuantity={this.changeQuantity}
                    removeFromInventory={this.removeFromInventory}
                    finalize={this.finalize}
                    inventory={this.state.inventory}
                />
            </div>
        )
    }
}

export default Display
