import React from 'react'
import Critter from './Critter'

const Critters = (props) => {
    return (
        <div className="critters">
            {props.critters.map((element) => {
                return (
                    <Critter
                        addToInventory={props.addToInventory}
                        key={element.id}
                        data={element}
                    />
                )
            })}</div>
    )
}

export default Critters