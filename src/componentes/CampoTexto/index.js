import './CampoTexto.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...` // interpolação de string no JavaScript
    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto