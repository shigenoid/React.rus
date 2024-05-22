import React from 'react';
import cardStyle from './style.js';

function CardBody({ nama, kelas, alamat }) {
    return (
        <ul style={cardStyle.cardUl}>
            <li style={cardStyle.cardLi}>Nama : {nama}</li>
            <li style={cardStyle.cardLi}>Kelas : {kelas}</li>
            <li style={cardStyle.cardLi}>Alamat : {alamat}</li>
        </ul>
    );
}

function CardImage({ foto }) {
    return <img src={foto} alt="Foto Siswa" style={cardStyle.cardImg} />
}

function DeleteButton({ id, onDelete }) {
    return <button className='card__delete' onClick={() => onDelete(id)}>Delete</button>
}

function Card({id, nama, kelas, alamat, foto, onDelete}) {
    return (
        <div style={cardStyle.card}>
            <CardImage foto={foto} />
            <CardBody nama={nama} kelas={kelas} alamat={alamat} />
            <DeleteButton id={id} onDelete={onDelete}/>
        </div>
    );
}

export default Card;
