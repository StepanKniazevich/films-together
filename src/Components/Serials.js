import React from "react";
import { Card, Header, CardGroup } from "react-bootstrap";


const ShowFilms = function (props) {
    return (
        <React.Fragment>

            <CardGroup  >
                {props.serial.map((item) => {
                    return (

                        < Card className="card-item __serials" >
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


export default function Serials() {


    const serials = [[
        {
            name: "Дивні дива (1 сезон)", imgUrl: "https://s.mind.ua/img/forall/a/201835/96.jpg?1522916677",
            url: "https://uaserials.pro/853-divni-diva.html", mark: 9.4
        },
        {
            name: "Дивні дива (3 сезон)", imgUrl: "https://i.obozrevatel.com/gallery/2019/8/2/s2.jpg",
            url: "https://uakino.club/seriesss/detective_series/9801-divn-diva.html", mark: 9.5
        },
        {
            name: "Eмілі в парижі (1 сезон)", imgUrl: "https://www.magazine-hd.com/apps/wp/wp-content/uploads/2020/11/emily-in-paris-lily-collins.jpg",
            url: "http://skam.online/emily-in-paris/", mark: 7.3
        }],
    [{
        name: "Секс/життя", imgUrl: "https://uaserials.pro/posters/5000.jpg",
        url: "https://filmix.ac/seria/drama/152259-seks-zhizn-2021.html", mark: 6
    },
    {
        name: "Дивні дива (2 сезон)", imgUrl: "https://oxvo.ru/wp-content/uploads/2016/07/stranger-things-season-2-spoiler-free-review-netflix.jpeg",
        url: "https://uakino.club/seriesss/detective_series/5798-divn-diva.html", mark: 9.3
    }]

    ];


    return (
        <div className="serials">
            {serials.map(serial => <ShowFilms serial={serial} />)}
        </div>

    )
}