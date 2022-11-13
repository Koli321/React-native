import React, { Component } from "react";
import {
  Card,
  Container,
  Col,
  Row,
  ListGroup,
  ListGroupItem,
  Tab,
  Nav,
} from "react-bootstrap";
// import forfor from "../../public/img/blog/forfor.png";
// import redline from "../../public/img/blog/redline.png";
// import kingdom from "../../public/img/blog/kingdom.png";
// import spotifyvse from "../../public/img/blog/spotifyvse.png";
// import bladerunner from "../../public/img/blog/bladerunner.png";
// import mainluv from "../../public/img/blog/mainluv.png";

export default class Blog extends Component {
  render() {
    return (
      <div className="bgcolor">
        <div>
          <Container>
            <Tab.Container id="left-tabs" defaultActiveKey="Anime">
              <Row>
                <Col sm={3}>
                  <h5 className="categories">КАТЕГОРИИ</h5>
                  <Nav variant="tabs" className="flex-column mt-2" expand="md">
                    <Nav.Item>
                      <Nav.Link eventKey="Anime">Аниме</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Games">Игры</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Films">Фильмы</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="Irl">Ирл</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>

                <Col sm={9} className="cont">
                  <Tab.Content>
                    <Tab.Pane eventKey="Anime">
                      <hr className="linia"></hr>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/forfor.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">
                            <a href="Etaforforovayakukla" className="ssilka">
                              Косплей это культ|Эта фарфоровая кукла влюбилась
                            </a>
                          </h5>
                          <p className="textblog">
                            Я в теме так сказать. Анимешник из меня такой же,
                            как и басс гитарист... Вот сколько тайтлов я только
                            не пересмотрел за год (для меня по крайней мере это
                            многовато). И вот не могу я понять эту усидчивость
                            людей, которые сидят и смотрят за день весь сезон,
                            хоть 25 хоть 12 серий...
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Anime">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/redline.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">
                            <a href="Redline" className="ssilka">
                              Красная полоска длиною в жизнь|Redline
                            </a>
                          </h5>
                          <p className="textblog">
                            Смотрел я в этот раз Redline. Нет, не скин на Awp
                            или AK-47 в этом вашем каес го, AK-47 это вообще-то
                            классика и легенда русского рэпа - эх жизнь, хоть
                            за... ну вы поняли о чём я). Такс вернёмся к
                            рисовашкам, Redline в русской интерпретации (зацени
                            выучил новое слово) звучит как “Красная черта”,
                            почему не “Красная линия” ? 1.Kla$ - почему...
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Anime">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/forfor.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">
                            <a href="Etaforforovayakukla" className="ssilka">
                              Косплей это культ|Эта фарфоровая кукла влюбилась
                            </a>
                          </h5>
                          <p className="textblog">
                            Я в теме так сказать. Анимешник из меня такой же,
                            как и басс гитарист... Вот сколько тайтлов я только
                            не пересмотрел за год (для меня по крайней мере это
                            многовато). И вот не могу я понять эту усидчивость
                            людей, которые сидят и смотрят за день весь сезон,
                            хоть 25 хоть 12 серий...
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Anime">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/redline.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">
                            <a href="Redline" className="ssilka">
                              Красная полоска длиною в жизнь|Redline
                            </a>
                          </h5>
                          <p className="textblog">
                            Смотрел я в этот раз Redline. Нет, не скин на Awp
                            или AK-47 в этом вашем каес го, AK-47 это вообще-то
                            классика и легенда русского рэпа - эх жизнь, хоть
                            за... ну вы поняли о чём я). Такс вернёмся к
                            рисовашкам, Redline в русской интерпретации (зацени
                            выучил новое слово) звучит как “Красная черта”,
                            почему не “Красная линия” ? 1.Kla$ - почему...
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Games">
                      <hr className="linia"></hr>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/kingdom.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">
                            <a href="Anonskingdomheartsiv" className="ssilka">
                              Анонс Kingdom Hearts 4
                            </a>
                          </h5>
                          <p className="textblog">
                            Скворешники анонсировали Kingdom hearts 4. Я за
                            серию не шарю, но вся вот эта rpg механика, да с
                            персонажами из Disney прям привлекает.Да вот только
                            на пк все части портанули недавно, да и русского не
                            завезли , ещё и ценник под 6к... В общем вот такие
                            отношения у меня с этой серией игр, жду, но играть
                            скорее всего не буду)
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Games">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/kingdom.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">
                            <a href="Anonskingdomheartsiv" className="ssilka">
                              Анонс Kingdom Hearts 4
                            </a>
                          </h5>
                          <p className="textblog">
                            Скворешники анонсировали Kingdom hearts 4. Я за
                            серию не шарю, но вся вот эта rpg механика, да с
                            персонажами из Disney прям привлекает.Да вот только
                            на пк все части портанули недавно, да и русского не
                            завезли , ещё и ценник под 6к... В общем вот такие
                            отношения у меня с этой серией игр, жду, но играть
                            скорее всего не буду)
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Games">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/kingdom.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">
                            <a href="Anonskingdomheartsiv" className="ssilka">
                              Анонс Kingdom Hearts 4
                            </a>
                          </h5>
                          <p className="textblog">
                            Скворешники анонсировали Kingdom hearts 4. Я за
                            серию не шарю, но вся вот эта rpg механика, да с
                            персонажами из Disney прям привлекает.Да вот только
                            на пк все части портанули недавно, да и русского не
                            завезли , ещё и ценник под 6к... В общем вот такие
                            отношения у меня с этой серией игр, жду, но играть
                            скорее всего не буду)
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Games">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/kingdom.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">
                            <a href="Anonskingdomheartsiv" className="ssilka">
                              Анонс Kingdom Hearts 4
                            </a>
                          </h5>
                          <p className="textblog">
                            Скворешники анонсировали Kingdom hearts 4. Я за
                            серию не шарю, но вся вот эта rpg механика, да с
                            персонажами из Disney прям привлекает.Да вот только
                            на пк все части портанули недавно, да и русского не
                            завезли , ещё и ценник под 6к... В общем вот такие
                            отношения у меня с этой серией игр, жду, но играть
                            скорее всего не буду)
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Irl">
                      <hr className="linia"></hr>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/spotifyvse.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <a href="spotifyushel" className="ssilka">
                            <h5 className="nazblog">Spotify ВСЁ!</h5>
                          </a>
                          <p className="textblog">
                            Вот как я сильно не был в курсах и не шарил за
                            Spotify, также сильно я не хочу сейчас его терять.
                            Всё, с рашки ушёл, с акк выкинуло везде и не
                            пускает. (через VPN не чекал) Где теперь музыку
                            слушать ??
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Irl">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/mainluv.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">
                            <a href="Maincraftluv" className="ssilka">
                              Всё в распад.
                            </a>
                          </h5>
                          <p className="textblog">
                            Как же быстро идёт время... вот казалось, только
                            недавно приходя со школы после мучительных 4х уроков
                            ты брал свой маленький Samsung Wave 525...
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Irl">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/spotifyvse.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <a href="spotifyushel" className="ssilka">
                            <h5 className="nazblog">Spotify ВСЁ!</h5>
                          </a>
                          <p className="textblog">
                            Вот как я сильно не был в курсах и не шарил за
                            Spotify, также сильно я не хочу сейчас его терять.
                            Всё, с рашки ушёл, с акк выкинуло везде и не
                            пускает. (через VPN не чекал) Где теперь музыку
                            слушать ??
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Irl">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/mainluv.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">
                            <a href="Maincraftluv" className="ssilka">
                              Всё в распад.
                            </a>
                          </h5>
                          <p className="textblog">
                            Как же быстро идёт время... вот казалось, только
                            недавно приходя со школы после мучительных 4х уроков
                            ты брал свой маленький Samsung Wave 525...
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Films">
                      <hr className="linia"></hr>
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/redline.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">Куда бежит то ???</h5>
                          <p className="textblog">
                            Ну тут и говорить подавно это самый лучший фильм и
                            другие мнения не учитываются{" "}
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Films">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/redline.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">Куда бежит то ???</h5>
                          <p className="textblog">
                            Ну тут и говорить подавно это самый лучший фильм и
                            другие мнения не учитываются{" "}
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Films">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/redline.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">Куда бежит то ???</h5>
                          <p className="textblog">
                            Ну тут и говорить подавно это самый лучший фильм и
                            другие мнения не учитываются{" "}
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>

                    <Tab.Pane eventKey="Films">
                      <div class="d-flex align-items-center">
                        <div class="flex-shrink-0" className="cart">
                          <img className="imgblog" src='/img/blog/redline.png' />
                        </div>
                        <div class="flex-grow-1 ms-3">
                          <h5 className="nazblog">Куда бежит то ???</h5>
                          <p className="textblog">
                            Ну тут и говорить подавно это самый лучший фильм и
                            другие мнения не учитываются{" "}
                          </p>
                        </div>
                      </div>
                      <hr className="linia"></hr>
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Container>
        </div>
      </div>
    );
  }
}
