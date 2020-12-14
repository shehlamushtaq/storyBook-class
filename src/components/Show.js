import React from 'react'

const Show = () => {
    return (
        <div>
            <div>
            <ul>
    {props.data.map((item,ind)=><li key={ind}>{item.name}{item.work}{item.day}</li>)}
            </ul>
        </div>
        </div>
    )
}

export default Show
