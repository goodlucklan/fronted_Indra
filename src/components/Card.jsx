import React from 'react'
import CardList from './CardList'
export default function Card({ data }) {
    return (
        <div className="Card-Align">
            {data.map((x) => {
                return (
                    <CardList
                        key={x.id}
                        img={x.img}
                        name={x.name}
                        Rol={x.Rol}
                    />
                )
            })}
        </div>
    )
}
