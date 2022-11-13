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

import tglogo from "../img/contacts/logo-telegram.png";
import vklogo from "../img/contacts/vklogo.png";
import youtubelogo from "../img/contacts/youtubelogo.png";
import tiktoklogo from "../img/contacts/tiktoklogo.png";
import maillogo from "../img/contacts/maillogo.png";
import twitchlogo from "../img/contacts/twitchlogo.png";

export default class Contacts extends Component {
  render() {
    return (
      <div className="bgcolor">
        <Container>
          <h1 className="text-center">Связь со мной и другой контент</h1>

          <Tab.Container id="left-tabs" defaultActiveKey="Anime">
            <Row>
              <Col sm={9} className="contcontacts">
                <hr className="linia"></hr>
                <Tab.Content className="logocon">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0" className="cart">
                      <img className="imgcon" src={tglogo} />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5 className="nazcont">
                        <a href="https://t.me/mfxtime" className="ssilka">
                          Паблик в тг
                        </a>
                      </h5>
                    </div>
                  </div>
                </Tab.Content>
                <hr className="linia"></hr>

                <Tab.Content className="logocon">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0" className="cart">
                      <img className="imgcon" src={vklogo} />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5 className="nazcont">
                        <a href="https://vk.com/kikflip123" className="ssilka">
                          Страница Вконтакте
                        </a>
                      </h5>
                    </div>
                  </div>
                </Tab.Content>
                <hr className="linia"></hr>

                <Tab.Content className="logocon">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0" className="cart">
                      <img className="imgcon" src={youtubelogo} />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5 className="nazcont">
                        <a href="https://www.youtube.com/" className="ssilka">
                          Мой канал на YouTube
                        </a>
                      </h5>
                    </div>
                  </div>
                </Tab.Content>
                <hr className="linia"></hr>

                <Tab.Content className="logocon">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0" className="cart">
                      <img className="imgcon" src={tiktoklogo} />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5 className="nazcont">
                        <a
                          href="https://www.tiktok.com/ru-RU"
                          className="ssilka"
                        >
                          Я в ТикТоке
                        </a>
                      </h5>
                    </div>
                  </div>
                </Tab.Content>
                <hr className="linia"></hr>

                <Tab.Content className="logocon">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0" className="cart">
                      <img className="imgcon" src={twitchlogo} />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5 className="nazcont">
                        <a
                          href="https://www.twitch.tv/myafix"
                          className="ssilka"
                        >
                          Мой канал на самой толерантной площадке
                        </a>
                      </h5>
                    </div>
                  </div>
                </Tab.Content>
                <hr className="linia"></hr>

                <Tab.Content className="logocon">
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0" className="cart">
                      <img className="imgcon" src={maillogo} />
                    </div>
                    <div class="flex-grow-1 ms-3">
                      <h5 className="nazcont">Моя почта</h5>
                      <p className="opisaniecontacts">
                        Testyashik@yandex.ru<br></br>
                        NameName@gmail.com<br></br>
                        Yashiknomertri@mail.ru
                      </p>
                    </div>
                  </div>
                </Tab.Content>
                <hr className="linia"></hr>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}
