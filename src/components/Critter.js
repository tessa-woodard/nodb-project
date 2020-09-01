import React, { Component } from 'react'

class Critter extends Component {
    constructor() {
        super()
        this.state = {
            quantity: 0,
        }
    }

    handleQuantityChange(action) {
        if (action === 'up') {
            this.setState({
                quantity: this.state.quantity + 1
            })
        } else {
            if (this.state.quantity > 0) {
                this.setState({
                    quantity: this.state.quantity - 1,
                })
            }
        }
    }

    handleAddToInventory() {
        this.props.addToInventory(this.props.data.id, this.state.quantity)
        this.setState({
            quantity: 0,
        })
    }

    render() {
        return (
            <div className="critter">
                <img
                    src={this.props.data.image}
                    alt="critter"
                />
                <p>{this.props.data.name}</p>
                <p> {this.props.data.price} <img className="bells" src="https://dodo.ac/np/images/thumb/5/52/100_Bells_NH_Icon.png/120px-100_Bells_NH_Icon.png" /></p>
                <div className="button">
                    <button onClick={() => this.handleQuantityChange('down')}>-</button>
                    <button onClick={() => this.handleQuantityChange('up')}>+</button>
                    <p>{this.state.quantity}</p>
                </div>
                {this.state.quantity ? (
                    <button onClick={() => this.handleAddToInventory()}>Sell!</button>
                ) : null}
            </div>
        )
    }
}

export default Critter