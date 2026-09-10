import { Link } from 'react-router-dom'

function FormularioPages() {   
    return (
        <div>
            <h1>Formulario Page</h1>
            <p>This is the Formulario page of our application.</p>  
            <Link to="/formulario" className="nav-link">Go to Formulario Page</Link>        
        </div>
    )
}
export default FormularioPages;