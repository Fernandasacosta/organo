import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderConcatenada = `${props.placeholder}...`

    

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }


    return (
        <div className="campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange ={aoDigitado} required={props.obrigatorio} placeholder={placeholderConcatenada}/>
        {/* placeholder = {props.placeholder} isso quando nao precisar repetir o texto, no caso, os 3 pontinhos ...*/}
        </div>
    )
}

export default CampoTexto 
