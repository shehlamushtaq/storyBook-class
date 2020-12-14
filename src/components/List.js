import React,{useState} from 'react'
const List = ({data}) => {

    return (
        <div>
            <ul>
    {data.map((item,ind)=><li key={ind}>{item.work}</li>)}
            </ul>
        </div>
    )
}

export default List
