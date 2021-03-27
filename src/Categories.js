import { Carousel, Radio } from 'antd';
import northAmerican from "./assets/icons/burger.png";
import indian from "./assets/icons/chili-pepper.png";
import dessert from "./assets/icons/cupcake.png";
import asian from "./assets/icons/noodles.png";
import italian from "./assets/icons/pizza.png";
import vegan from "./assets/icons/vegetable.png";
import mexican from "./assets/icons/taco.png";
import './App.scss';

function onChange(a, b, c) {
    console.log(a, b, c);
}
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
function Categories() {
    return (
        <Carousel afterChange={onChange}>
            <div>
                <button className={"button"}><img className={"images"} src={northAmerican}></img></button>
                <button className={"button"}><img className={"images"} src={mexican}></img></button>
                <button className={"button"}><img className={"images"} src={italian}></img></button>
                <button className={"button"}><img className={"images"} src={asian}></img></button>
            </div>
            <div>
                <button className={"button1"}><img className={"images"} src={indian}></img></button>
                <button className={"button1"}><img className={"images"} src={vegan}></img></button>
                <button className={"button1"}><img className={"images"} src={dessert}></img></button>
            </div>
        </Carousel>

    );
}

export default Categories;

//