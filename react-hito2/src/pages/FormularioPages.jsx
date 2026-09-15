import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function FormularioPages({Email},) {
 const [email, setEmail] = useState("");
 const [contrasena,setContrasena] = useState ("");
 const [repContrasena, setRepContrasena] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault();


    setEmail(e.target.value);
    if ( !email || !contrasena || !repContrasena){
      alert("Por favor, ingresar todos los campos")
      return;
    }
    if (contrasena !== repContrasena){
      alert("Las contraseñas no coinciden")
      return;
    }
    if (contrasena.length < 6){
      alert("La contraseña debe tener al menos 6 carcteres")
      return;
    }

  };



  return (
    <>
  
      <Header />
      <div  className="formulario">
      <h1>Registro</h1>
      <div>
        
        <form onSubmit={handleSubmit}>
        <label className="formLabel" htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onSubmit={handleSubmit} placeholder="email@correo.com " required />

        <label className="formLabel" htmlFor="contrasena">Contraseña</label>
        <input type="email" id="contrasena" value={contrasena} onSubmit={handleSubmit} placeholder="Minimo 6 carcteres" required />

        <label className="formLabel" htmlFor="repContrasena">Email  </label>
        <input type="email" id="repContrasena" value={repContrasena} onSubmit={handleSubmit} placeholder="Repetir contraseña" required />

        <button type="submit">Registrarse</button>

        </form>

      </div>
      </div>
      <Footer />
    </>
    
  );
}

export default FormularioPages;