import { Carousel, Radio } from 'antd';
import northAmerican from "./assets/icons/northAmerican.png";
import indian from "./assets/icons/indian.png";
import dessert from "./assets/icons/dessert.png";
import asian from "./assets/icons/noodles-test.jpg";
import italian from "./assets/icons/italian.png";
import vegan from "./assets/icons/vegan.png";
import mexican from "./assets/icons/mexican.png";
import middleEastern from "./assets/icons/middleEastern.png";
import './App.scss';
import {Button} from 'reactstrap'

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
                {/*Add the alt attribute to these images in case they dont load*/}
                <Button className={"button"}><img className={"images responsive"} src={northAmerican}></img></Button>
                <button className={"button"}><img className={"images responsive"} src={mexican}></img></button>
                <button className={"button"}><img className={"images responsive"} src={italian}></img></button>
                <button className={"button"}><img className={"images responsive"} src={asian}></img></button>
            </div>

            <div>
                <button className={"button"}><img className={"images responsive"} src={indian}></img></button>
                <button className={"button"}><img className={"images responsive"} src={vegan}></img></button>
                <button className={"button"}><img className={"images responsive"} src={dessert}></img></button>
                <button className={"button"}><img className={"images responsive"} src={middleEastern}></img></button>
                </div>

        </Carousel>

    );
}


export default Categories;
