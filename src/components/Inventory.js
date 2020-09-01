import React from 'react'
import InventoryItem from './InventoryItem'

const Inventory = (props) => {
    return (
        <div className="inventory-container">
            <div className="inventory">
                <h2>Welcome! What would you like to sell today?</h2>
                {props.inventory.items.map((element) => {
                    return (
                        <InventoryItem
                            changeQuantity={props.changeQuantity}
                            removeFromInventory={props.removeFromInventory}
                            key={element.inventoryId}
                            data={element}
                        />
                    )
                })}
            </div>
            <div className="total">
                All done! I can buy these from you for a total of {props.inventory.total} . Sounds good?
                <button className="button1" onClick={props.finalize}>Sell! Sell! Sell!</button>
            </div>
        </div>
    )
}

export default Inventory