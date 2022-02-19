import React from 'react';
import { Card, CardGroup } from "react-bootstrap";



const ShowCartons = function (props) {
    return (
        <React.Fragment>

            <CardGroup  >
                {props.carton.map((item) => {
                    return (

                        < Card className="card-item __different" >
                            <Card.Img variant="top" src={item.imgUrl} width="200px" height="300px" />
                            <Card.Body className="body-anime">
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Link href={item.url} class="btn btn-outline-light">Посилання</Card.Link>
                            </Card.Body>

                            <Card.Footer>
                                <span className="mark-cartons">Оцінка {item.mark} </span>
                            </Card.Footer>
                        </Card>
                    )
                })}

            </CardGroup>

        </React.Fragment>
    )
}

export default function Cartons() {

    const Cartons = [[
        {
            name: "Співай", imgUrl: "https://planetakino.ua/res/get-poster/00000000000000000000000000002097/1.jpg",
            url: "https://uakino.club/cartoon/2229-spvay.html", mark: 8.0
        },
        {
            name: "Планета скарбів", imgUrl: "https://kto-ozvuchil.ru/wp-content/uploads/11-800x400.jpeg",
            url: "http://moviestape.net/katalog_multfilmiv/multfilm/1792-planeta-skarbiv.html", mark: 8.3
        },
        {
            name: "Співай 2", imgUrl: "https://multiplex.ua/images/b6/34/b6346915b54460521fdb7af57861f5e5.jpeg",
            url: "https://uakino.club/cartoon/features/13047-spvay-2.html", mark: 8.5
        }]];



    return <div className="Cartons">{
        Cartons.map(carton => <ShowCartons carton={carton} />)
    }</div>
        ;
}
