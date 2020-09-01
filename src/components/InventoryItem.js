import React from 'react'

const InventoryItem = (props) => {
    const { inventoryId } = props.data
    return (
        <div className="inventory-item">
            <img
                src={props.data.image}
                alt="critter"
            />
            <div>
                <p>{props.data.name}</p>
                <p>{props.data.quantity}</p>
                <p>{props.data.price} <img className="bells1" src="https://dodo.ac/np/images/thumb/5/52/100_Bells_NH_Icon.png/120px-100_Bells_NH_Icon.png" /></p>
                <div className="button2">
                    <button onClick={() => props.changeQuantity(inventoryId, 'down')}>-</button>
                    <button onClick={() => props.changeQuantity(inventoryId, 'up')}>+</button>
                    <button onClick={() => props.removeFromInventory(inventoryId)}>x</button>
                </div>
            </div>
        </div>
    )
}

export default InventoryItem