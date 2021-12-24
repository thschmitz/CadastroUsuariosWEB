import React from "react"
import Main from "../template/Main"

export default props=>{
    return(
        <Main icon="home" title="Inicio" 
            subtitle="Segundo Projeto do capitulo de React">
            <div className="display-4">Bem Vindo!</div>
            <hr/>
            <p className="mb-0">Sistema para exemplificar a construcao de um cadastro desenvolvido com React</p>
        </Main>
    )
}