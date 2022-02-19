import React from "react";
import { Card, Header, CardGroup } from "react-bootstrap";

const ShowFilms = function (props) {
    return (
        <React.Fragment>

            <CardGroup  >
                {props.sweets.map((item) => {
                    return (

                        < Card className="card-item __sweets" >
                            <Card.Img variant="top" src={item.imgUrl} width="200px" height="300px" />
                            <Card.Body className="body-anime">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Link href={item.url} class="btn btn-outline-light">Посилання</Card.Link>
                            </Card.Body>

                            <Card.Footer>
                                <span className="mark-anime">Оцінка {item.mark} </span>
                            </Card.Footer>
                        </Card>
                    )
                })}

            </CardGroup>

        </React.Fragment>
    )
}


export default function Sweets() {

    const serials = [[
        {
            name: "Половина всього", imgUrl: "https://images.kinorium.com/movie/shot/2044082/h280_49684341.jpg",
            url: "https://rezka.ag/films/melodrama/34262-polovina-vsego-2020.html", mark: 7.6
        },
        {
            name: "Містер Черч", imgUrl: "https://m.buro247.ua/images/2016/09/640-Mr.Church.jpg",
            url: "https://kinanema.net/load/2016/mister_cherch_2016/118-1-0-11880", mark: 8.6
        },
        {
            name: "Валеріан і місто тисячі планет", imgUrl: "https://gordonua.com/img/article/2231/68_main.jpg",
            url: "http://moviestape.net/katalog_filmiv/bojovyky/9603-valerian-ta-misto-tysjachi-planet.html", mark: 8.2
        }],
    [{
        name: "Розмальована вуаль", imgUrl: "https://media.timeout.com/images/29103/630/472/image.jpg",
        url: "https://uakino.club/filmi/genre_drama/2049-rozmalovana-vual.html", mark: 7.9
    }]

    ];



    return (

        <div className="sweets">
            {serials.map(sweet => <ShowFilms sweets={sweet} />)}</div>

    )
}