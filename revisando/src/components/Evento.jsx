import React from "react";
export default function Evento({titulo, descricao, hora, local}){
    return(
        <section className='Evento'>
            <div className='Informacao'>
                <p>{titulo}</p>
                <p>{descricao}</p>
                <p>{hora}</p>
                <p>{local}</p>
            </div>

        <img src="https://img.freepik.com/fotos-gratis/cachorro-fofo-usando-oculos_23-2148917262.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1714176000&semt=ais" />

        </section>
    )
}