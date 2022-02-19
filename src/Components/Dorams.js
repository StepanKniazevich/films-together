import React from "react";
import { Card, Header, CardGroup } from "react-bootstrap";




const ShowDorams = function (props) {
    return (
        <React.Fragment>
            <CardGroup  >
                {props.doramsFilms.map((item) => {
                    return (

                        < Card className="card-item __dorams " >
                            <Card.Img variant="top" src={item.imgUrl} width="100px" height="150px" />
                            <Card.Body className="body-anime">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Link href={item.url} class="btn btn-outline-light">Посилання</Card.Link>
                            </Card.Body>

                            <Card.Footer>
                                <span className="mark-dorams">Оцінка {item.mark} </span>
                            </Card.Footer>
                        </Card>
                    )
                })}

            </CardGroup>
        </React.Fragment>
    )
}

export default function Dorama() {

    const doramsName = [[
        {
            name: "Гра в кальмара", imgUrl: "https://total.kz/storage/04/04fe2496db44ce1c5cf9b622db3c686e_resize_w_830_h_465.jpg",
            url: "https://kinogo.zone/action/12231-igra-v-kalmara-2021-hd.html", mark: 8
        },
        {
            name: "Щастя", imgUrl: "https://www.yesasia.ru/wp-content/uploads/2021/10/dummy-1-34-700x467.jpeg",
            url: "https://kinogo.zone/action/12231-igra-v-kalmara-2021-hd.html", mark: 8.5
        },
        {
            name: "Alice in Borderland", imgUrl: "https://www.spletnik.ru/img/__post/08/0810a512ae5636a497ffd76d443182b0_212.jpg",
            url: "https://doramy.club/23884-alisa-v-pograniche.html", mark: 8.4
        },
        {
            name: "Один звичайний день ", imgUrl: "https://2datyvyhoda.ru/wp-content/uploads/2021/11/One-Ordinary-Day-2021-1200x720.jpg",
            url: "https://doramy.club/29065-v-odin-obychnyj-den.html", mark: 8.4
        }], [
        {
            name: " Усі ми мертві ", imgUrl: "https://images.unian.net/photos/2022_02/thumb_files/400_0_1643789312-1358.jpg?0.6869459708818684",
            url: "https://www.netflix.com/ua/title/81237994", mark: 8.1
        }]];



    return (
        <div className="dorams wrapper">

            {doramsName.map(item => <ShowDorams doramsFilms={item} />)}

        </div >);
}

/*
 <div className="dorams" >

            doramsName.map((dorama) => {
                return (
                    < Card className="card-item __anime" >
                        <Card.Img variant="top" src={dorama.imgUrl} width="200px" height="300px" />
                        <Card.Body className="body-anime">
                            <Card.Title>{dorama.name}</Card.Title>
                            <Card.Link href={dorama.url} class="btn btn-outline-light">Посилання</Card.Link>
                        </Card.Body>

                        <Card.Footer>
                            <span className="mark-anime">Оцінка {dorama.mark} </span>
                        </Card.Footer>
*/