import "../App.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import CardPizza from "../components/CardPizza";
import Footer from "../components/Footer";


// Imágenes.
import margarita from '../assets/margarita.png';
import marina from '../assets/marina.png';
import veggie from '../assets/veggie.png';
import carbonara from '../assets/carbonara.png';
import caprichoza from '../assets/caprichoza.png';
import prociutto from '../assets/prociutto.png';

function HomePages({ addToCart }) {
  return (
    <>
      <Header />
      <Hero />
      <div className="cont-producto">
        <CardPizza
          img={margarita}
          name="Pizza Margarita"
          description="Una pizza clásica con tomate, mozzarella y albahaca"
          price={10990}
          onAddToCart={() =>
            addToCart({
              img: margarita,
              name: "Pizza Margarita",
              description: "Una pizza clásica con tomate, mozzarella y albahaca",
              price: 10990,
            })
          }
        />
        <CardPizza
          img={marina}
          name="Pizza Marinara"
          description="Una pizza con salsa de tomate, ajo y orégano"
          price={8990}
          onAddToCart={() =>
            addToCart({
              img: marina,
              name: "Pizza Marinara",
              description: "Una pizza con salsa de tomate, ajo y orégano",
              price: 8990,
            })
          }
        />
        <CardPizza
          img={veggie}
          name="Pizza Veggie"
          description="Una pizza con una variedad de vegetales frescos"
          price={12990}
          onAddToCart={() =>
            addToCart({
              img: veggie,
              name: "Pizza Veggie",
              description: "Una pizza con una variedad de vegetales frescos",
              price: 12990,
            })
          }
        />
        <CardPizza
          img={carbonara}
          name="Pizza Carbonara"
          description="Una pizza con salsa carbonara, panceta y huevo"
          price={14990}
          onAddToCart={() =>
            addToCart({
              img: carbonara,
              name: "Pizza Carbonara",
              description: "Una pizza con salsa carbonara, panceta y huevo",
              price: 14990,
            })
          }
        />
        <CardPizza
          img={caprichoza}
          name="Pizza Caprichoza"
          description="Una pizza con jamón, champiñones y aceitunas"
          price={14990}
          onAddToCart={() =>
            addToCart({
              img: caprichoza,
              name: "Pizza Caprichoza",
              description: "Una pizza con jamón, champiñones y aceitunas",
              price: 14990,
            })
          }
        />
        <CardPizza
          img={prociutto}
          name="Pizza Prosciutto"
          description="Una pizza con prosciutto, rúcula y parmesano"
          price={16990}
          onAddToCart={() =>
            addToCart({
              img: prociutto,
              name: "Pizza Prosciutto",
              description: "Una pizza con prosciutto, rúcula y parmesano",
              price: 16990,
            })
          }
        />
      </div>
      <Footer />
    </>
  );
}

export default HomePages;