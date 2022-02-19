import React from "react";
import { Card, Header, CardGroup } from "react-bootstrap";



const ShowAnime = function (props) {
    return (
        <React.Fragment>
            <CardGroup  >
                {props.animeFilms.map((item) => {
                    return (

                        < Card className="card-item __anime" >
                            <Card.Img variant="top" src={item.imgUrl} width="100px" height="150px" />
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


export default function Anime() {

    const animeFilms =
        [[{
            name: "Твоя квітнева брехня", imgUrl: "https://images.kinorium.com/movie/shot/1526285/h280_38468899.jpg",
            url: "https://rezka.ag/animation/adventures/40712-vedmak-koshmar-volka-2021.html", mark: 7.8
        },
        {
            name: "Відьмак: Кошмар Вовка", imgUrl: "https://images.kinorium.com/movie/shot/2359825/h280_49917647.jpg",
            url: "https://kinogo.zone/action/12231-igra-v-kalmara-2021-hd.html", mark: 8.1
        },
        {
            name: "Місто, де мене немає", imgUrl: "https://pw.artfile.me/wallpaper/16-04-2021/650x358/boku-dake-ga-inai-machi-anime-gorod-v-ko-1562472.jpg",
            url: "https://jut.su/boku-dake/", mark: 8.4
        },
        {
            name: "Погода з тобою ", imgUrl: "https://aramajapan.com/wp-content/uploads/2019/07/aramajapan.com-weather-child-weathering-with-you-characters-appear-in-new-cm-for-suntory-weather-child-weathering-with-you-characters-appear-in-new-cm-for-suntory.jpg",
            url: "https://yummyanime.club/catalog/item/ditya-pogody", mark: 8.9
        }], [
            {
                name: "5 сантиметрів за секунду ", imgUrl: "https://i.pinimg.com/originals/10/2d/59/102d59872f8fee0091cf77746c4dc833.jpg",
                url: "https://yummyanime.club/catalog/item/5-santimetrov-v-sekundu", mark: 9.0
            },
            {
                name: "Твоє ім'я", imgUrl: "https://i1.wp.com/itc.ua/wp-content/uploads/2017/10/Kimi_no_na_wa_i01.jpg",
                url: "https://animego.cc/1832-tvoe-imya.html", mark: 9.2
            },
            {
                name: "Ходячий замок ", imgUrl: "https://thumb.tildacdn.com/tild3331-3764-4336-b635-343531656235/-/resize/824x/-/format/webp/_7.png",
                url: "https://gidonline.io/film/xodyachij-zamok/", mark: 9.0
            }
            ,
            {
                name: "Сад слів ", imgUrl: "https://www.anibox.org/_nw/80/76620923.png",
                url: "https://anitube.in.ua/1817-sad-clv.html", mark: 9.5
            }],
        [{
            name: "Ловці забутих голосів ", imgUrl: "http://pics.livejournal.com/coolconnections/pic/0005f1w8/s640x480",
            url: "https://kinokrad.co/256187-lovcy-zabytyh-golosov.html", mark: 8.8
        }
            ,
        {
            name: "Електромагнітна подружка", imgUrl: "https://cdn-irec.r-99.com/sites/default/files/imagecache/copyright/user-images/969136/2WaeWVOrqHkWPo5ZudLvg.jpg",
            url: "https://shikimori.one/animes/5177-denpa-teki-na-kanojo", mark: 5.8
        }
            ,
        {
            name: "Ліс, де мерехтять світлячки ", imgUrl: "https://www.anibox.org/_nw/80/76620923.png",
            url: "https://film-ua.com/1520-v-lis-de-merehtyat-svitlyachki.html", mark: 8.5
        },
        {
            name: "Я хочу з'їсти твою підшлункову ", imgUrl: "https://otaku-first.at.ua/_sf/0/49509791.jpg",
            url: "https://otaku-first.at.ua/stuff/anime/ja_khochu_z_39_jisti_tvoju_pidshlunkovu_kimi_no_suizou_wo_tabetai/1-1-0-59", mark: 8.8
        }],
        [
            {
                name: "На твоїй хвилі ", imgUrl: "https://img.rl0.ru/afisha/e904x508p507x123f1297x741q85i/s4.afisha.ru/mediastorage/bd/f5/94980754735342b297ceffecf5bd.jpg",
                url: "https://kinogo.zone/anime/5946-na-tvoey-volne-hd.html", mark: 8.8
            },
            {
                name: "За хмарами", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvUn08V1-ltZubKYtdUoyH1NTt67OXRcurAkWvmyqQ2RyH1duImZaO9vWM8SnYW47RsL0&usqp=CAU",
                url: "https://vmeste.tv/room/115900/za-oblakami-2004/becaf40d89504f278e6f4f23e88a7eaf", mark: 8.4
            }


        ]
        ]

    return (


        <div className="anime wrapper">

            {animeFilms.map(item => <ShowAnime animeFilms={item} />)}

        </div >);

}

/*
<div className="card-container">
<CardGroup >
{animeFilms.name.map((name, index) => {
    return (

        <Card className="card-item" >
            <Card.Img variant="top" src={animeFilms.imgUrls[index]} />
            <Card.Body className="body-anime">
                <Card.Title>{name}</Card.Title>
                <a href={animeFilms.ursl[index]} class="btn btn-outline-light" >Посилання</a>
            </Card.Body className="body-anime">
            <Card.Footer>
                <span className="text-muted">`Оцінка {animeFilms.raiting[index]} `</span>
            </Card.Footer>
        </Card>
    )
})}

</CardGroup>

</div>);*/