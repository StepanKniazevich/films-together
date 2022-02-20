import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



export default function Slider() {

    return (<div className="slider-container">
        <Carousel className="slidersList">
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://cdn.kanobu.ru/r/dcbe4b280cbedabf6d8dfc1b28cab1f9/1040x700/u.kanobu.ru/editor/images/9/227d4cbe-d00f-48fc-b287-304652af445e.jpg" width="460" height="345"
                    alt="Аніме"
                />
                <Carousel.Caption className="filmContent">
                    <h3>Аніме</h3>
                    <p>Твоє ім'я, погода з тобою, ходячий замок та багато інших"</p>
                    <a href="#/Anime" class="btn btn-outline-light" >Посилання</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://uaserial.net/uploads/posts/2019-07/1562844296_9zes5qcgc.jpg" width="460" height="345"
                    alt="Second slide"
                />
                <Carousel.Caption className="filmContent">
                    <h3>Cеріали</h3>
                    <p>Дивні дива, картковий будинок, секс/життя.."</p>
                    <a href="#/Serials" class="btn btn-outline-light" >Посилання</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://www.kino-teatr.ru/movie/kadr/139925/906470.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption className="filmContent">
                    <h3>Миленькі фільми</h3>
                    <p>Половина всього, Містер Черч, Валеріан і місто тисячі планет"</p>
                    <a href="#/Sweets" class="btn btn-outline-light" >Посилання</a>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://avatars.mds.yandex.net/get-zen_doc/99845/pub_61a4bd1eeedd4975a1754b9c_61a54a578f165b273f7da2eb/scale_1200"
                    alt="Third slide"
                    width="460x"
                    height="345px"
                />
                <Carousel.Caption className="filmContent">
                    <h3>Дорами</h3>
                    <p>Гра в кальмара, Щастя, Один типовий день ..."</p>
                    <a href="#/Dorams" class="btn btn-outline-light" >Посилання</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
                <img
                    className="d-block w-100"
                    src="https://multiplex.ua/images/b6/34/b6346915b54460521fdb7af57861f5e5.jpeg" width="460" height="345"
                    alt="Second slide"
                />
                <Carousel.Caption className="filmContent">
                    <h3>Мультфільми</h3>
                    <p>Співай, Планета скарбів..."</p>
                    <a href="#/Cartons" class="btn btn-outline-light" >Посилання</a>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://sts.sumy.ua/wp-content/uploads/2019/02/layk.jpg"
                    alt="4 slide"
                    width="460x"
                    height="345px"
                />
                <Carousel.Caption className="filmContent">
                    <font color="black">
                        <h3>Розчарування</h3>
                        <p>Чудо жінка , Смертельний лабірин 2 ... </p></font>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>





    </div >
    );
}