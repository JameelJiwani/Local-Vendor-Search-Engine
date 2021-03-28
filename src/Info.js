import './App.scss';
import './assets/css/resTemplate.css';
import { Row, Col, Carousel } from 'antd';
import pizza from "./assets/images/pizza.jpg";
import dessert from "./assets/images/dessert.jpg";
import noodles from "./assets/images/noodles.jpg";
import Italian_Fork from "./assets/images/Italian_Fork.png";
import burger from "./assets/images/burger.jpg";
import sambosa from "./assets/images/sambosa.jpg";
import sushi from "./assets/images/sushi.jpg"


function Info() {
    return ( 
    <div className = "container" >
        <p className = "header-text">
        Information:
        </p>
        <p >
        Mei at intellegat reprehendunt, te facilisis definiebas dissentiunt usu.Choro delicata voluptatum cu vix.Sea error splendide at. Te sed facilisi persequeris definitiones,
        ad per scriptorem instructior, vim latine adipiscing no.Cu tacimates salutandi his, mel te dicant quodsi aperiri.Unum timeam his eu.um ornatus nostrum vel, graece iracundia laboramus cu ius.No pro mazim blandit instructior,
        sumo voluptaria has et, vide persecuti abhorreant ne est. 
        </p>

        <hr></hr>

        <p className = "header-text">Reviews:</p>
        <p className ="smaller-header-text">Average review: 8.5/10</p>
        <p className ="smaller-header-text no-margines">Lukas: "Great Location!!"</p>
        <p >
        Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. 
        Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his. Tollit molestie suscipiantur his et. 
        </p>

        <hr></hr>

        <p className = "header-text">Pictures from our customers:</p>

        <Carousel className= "carousel-specs">
            <div>
                <button className={"button"}><img className={"images"} src={pizza}></img></button>
                <button className={"button"}><img className={"images"} src={noodles}></img></button>
                <button className={"button"}><img className={"images"} src={dessert}></img></button>
                <button className={"button"}><img className={"images"} src={noodles}></img></button>
                <button className={"button"}><img className={"images"} src={burger}></img></button>
                <button className={"button"}><img className={"images"} src={sambosa}></img></button>
                <button className={"button"}><img className={"images"} src={Italian_Fork}></img></button>
                <button className={"button"}><img className={"images"} src={sushi}></img></button>



            </div>
            <div>
                <button className={"button1"}><img className={"images"} src={pizza}></img></button>
                <button className={"button1"}><img className={"images"} src={dessert}></img></button>
                <button className={"button1"}><img className={"images"} src={noodles}></img></button>
                <button className={"button1"}><img className={"images"} src={sushi}></img></button>
                <button className={"button1"}><img className={"images"} src={sambosa}></img></button>
                <button className={"button1"}><img className={"images"} src={burger}></img></button>

            </div>
        </Carousel>

        <hr></hr>
        <hr></hr>


        <p className = "header-text">Da Alfredo Menu</p>
        <p className ="smaller-header-text">Starters</p>
        <p className="no-margines">Imported Salmon Steak   €9.90</p>
        <p className ="font-colour1 font-italics smaller-font" >Base de arroz, aguacate, salmón noruego, semillas de sésamo, edamame, wakame y soja light</p>
        <p className="no-margines">Imported Salmon Steak   €7.90</p>
        <p className ="font-colour1 font-italics smaller-font" >Queso de cabra light, dátiles, jamón serrano y rúcula</p>
        <p className="no-margines">Ensalada cesar   €8.90</p>
        <p className ="font-colour1 font-italics smaller-font" >lechuga, tomate, espinacas, pollo asado, picatostes, queso proteínico y salsa césar 0%</p>
        <hr></hr>
        <p className ="smaller-header-text">Main Course</p>
        <p className="no-margines">Oriental   €15.90</p>
        <p className ="font-colour1 font-italics smaller-font" >Cama de tabule con taquitos de pollo a la mostaza light</p>
        <p className="no-margines">Vegan Burguer   €11.90</p>
        <p className ="font-colour1 font-italics smaller-font" >Medio pollo asado acompañado de arroz o patatas al toque masala</p>
        <p className="no-margines">Indio Fit   €10.90</p>
        <p className ="font-colour1 font-italics smaller-font" >lechuga, tomate, espinacas, pollo asado, picatostes, queso proteínico y salsa césar 0%</p>
        <hr></hr>
        <p className ="smaller-header-text">Dessert</p>
        <p className="no-margines">Oriental   €15.90</p>
        <p className ="font-colour1 font-italics smaller-font" >Cama de tabule con taquitos de pollo a la mostaza light</p>
        <p className="no-margines">Vegan Burguer   €11.90</p>
        <p className ="font-colour1 font-italics smaller-font" >Medio pollo asado acompañado de arroz o patatas al toque masala</p>
        <p className="no-margines">Indio Fit   €10.90</p>
        <p className ="font-colour1 font-italics smaller-font" >lechuga, tomate, espinacas, pollo asado, picatostes, queso proteínico y salsa césar 0%</p>
        <hr></hr>
        <p className ="smaller-header-text">Special Offers</p>
        <p className="no-margines">Oriental   €15.90</p>
        <p className ="font-colour1 font-italics smaller-font" >Cama de tabule con taquitos de pollo a la mostaza light</p>
        <p className="no-margines">Vegan Burguer   €11.90</p>
        <p className ="font-colour1 font-italics smaller-font" >Medio pollo asado acompañado de arroz o patatas al toque masala</p>
        <p className="no-margines">Indio Fit   €10.90</p>
        <p className ="font-colour1 font-italics smaller-font" >lechuga, tomate, espinacas, pollo asado, picatostes, queso proteínico y salsa césar 0%</p>
        <hr></hr>
        <p className ="smaller-header-text">Resturaunt Information</p>
        <p className="no-margines">Lunch hours: </p>
        <p className ="font-colour1 font-italics smaller-font" >Mon. to Sat. 11.00am - 3.00pm</p>
        <p className="no-margines">Dinner hours:</p>
        <p className ="font-colour1 font-italics smaller-font" >Mon. to Sat. 6.00pm- 1.00am</p>
        <p className="no-margines">Address: </p>
        <p className ="font-colour1 font-italics smaller-font" >27 Old Gloucester St, 4530</p>
    </div>
    );
}
export default Info;