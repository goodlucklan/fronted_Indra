import React from 'react'
import './styles/Home.css'
export default function CardList({ img, name, Rol }) {
    return (
        <div className="card">
            <img src={img} alt="nombre" style={{width: '100%'}} />
            <h1 style={{color: "black", fontSize: '2vw'}}>{name}</h1>
            <p className="title">{Rol}</p>
            <p>Anzu Esports</p>
            <div className="icons" style={{margin: "24px 0"}}>
                <a href="/" style={{margin: "10px"}}><i className="fa fa-twitter"></i></a>
                <a href="/" style={{margin: "10px"}}><i className="fa fa-linkedin"></i></a>
                <a href="/" style={{margin: "10px"}}><i className="fa fa-facebook"></i></a>
            </div>
            <p><button>Contact</button></p>
        </div>
    )
}
