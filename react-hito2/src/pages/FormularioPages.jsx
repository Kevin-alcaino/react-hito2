
import Header from "../components/Header";
import Footer from "../components/Footer";

function FormularioPages() {
  return (
    <div>
  
      <Header />
      <div  className="formulario">
        <form action="">
          <p>Email</p>
          <input type="text"placeholder="correo@email.com" 
          />
          
         
        </form>
      </div>
      <Footer />
    </div>
    
  );
}

export default FormularioPages;