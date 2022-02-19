import React from "react";
import { Card, Header, CardGroup } from "react-bootstrap";


const ShowFilms = function (props) {
    return (
        <React.Fragment>

            <CardGroup  >
                {props.difFilms.map((item) => {
                    return (

                        < Card className="card-item __different" >
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




export default function Different() {


    const different = [[
        {
            name: "Зелена книга", imgUrl: "https://i2.wp.com/itc.ua/wp-content/uploads/2019/01/oblozhka-3.jpg?w=1280&quality=100&strip=all&ssl=1",
            url: "https://kinogo.zone/action/12231-igra-v-kalmara-2021-hd.html", mark: 8.1
        },
        {
            name: "Cмертельний лабіринт", imgUrl: "https://24tv.ua/resources/photos/news/1200x675_DIR/202004/1317402.jpg",
            url: "http://moviestape.net/katalog_filmiv/trylery/12324-smertelniy-labrint.html", mark: 7.8
        },
        {
            name: "Вартові галактики", imgUrl: "https://novy.tv/wp-content/uploads/sites/96/2016/09/strazhi.jpg",
            url: "https://uakino.club/filmi/genre-action/52-vartov-galaktiki.html", mark: 7.7
        },
    ],
    [{
        name: "Чорна вдова", imgUrl: "https://i.ytimg.com/vi/PaPXXQX8R1U/maxresdefault.jpg",
        url: "https://uakino.club/filmi/genre-action/12374-chorna-vdova.html", mark: 6.5
    }, {
        name: "Потяг у пусан ", imgUrl: "https://cdnimg.rg.ru/i/gallery/11f9a331/5_00c01774.jpg",
        url: "http://moviestape.net/katalog_filmiv/bojovyky/10454-potjag-do-pusanu.html", mark: 8.1
    },
    {
        name: "Дюна", imgUrl: "http://c.files.bbci.co.uk/EDB6/production/_120345806_duneposter.jpg.jpg",
        url: "https://uaserials.pro/5427-dyuna-2021.html", mark: 8.4
    }

    ],
    [{
        name: "Вартові галактики 2 ", imgUrl: "https://s.mind.ua/img/forall/a/201716/90.jpg?1493892334",
        url: "https://uakino.club/filmi/genre-action/498-vartov-galaktiki-2.html", mark: 7.4
    }]];




    return (
        <div className="different">{
            different.map(difFilms => { return (<ShowFilms difFilms={difFilms} />) })
        }</div>

    )
}