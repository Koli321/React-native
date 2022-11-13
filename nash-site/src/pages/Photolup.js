import React, { Component } from "react";
import panel from "../img/photo/panel.png";
import nebo from "../img/photo/nebo.png";
import cerk from "../img/photo/cerk.png";
import bereza from "../img/photo/bereza.png";
import derdom from "../img/photo/derdom.png";
import lestnica from "../img/photo/lestnica.png";
import more from "../img/photo/more.png";
import most from "../img/photo/most.png";
import nebotrava from "../img/photo/nebotrava.png";
import nochpan from "../img/photo/nochpan.png";
import odinder from "../img/photo/odinder.png";
import roznebo from "../img/photo/roznebo.png";
import relsi from "../img/photo/relsi.png";
import yazamok from "../img/photo/yazamok.png";
import zima from "../img/photo/zima.png";
import { Container, Card, CardGroup } from "react-bootstrap";

export default class Photolup extends Component {
  render() {
    return (
      <div className="bgcolor">
        <h1 className="text-center">Тута фоточки мои храняться :)</h1>
        <Container>
          <CardGroup id="portfolio-sidebar">
            <Card class="grid-item">
              <Card.Img margin="top" variant="top" src={bereza} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Берёзовая роща</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={zima} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Апрельское утро</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={roznebo} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Розовое небо</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={cerk} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Castlevania</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={lestnica} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Вечный подъём</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>
          </CardGroup>

          <CardGroup id="portfolio-sidebar">
            <Card>
              <Card.Img margin="top" variant="top" src={more} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Дальний берег</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={derdom} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Зарубежная фауна</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={yazamok} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Сел и сидит</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={relsi} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Рельсы шпалы кирпичи</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={panel} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Панелька</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>
          </CardGroup>

          <CardGroup id="portfolio-sidebar">
            <Card>
              <Card.Img margin="top" variant="top" src={nebo} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Мир лазуритовых верхов</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={most} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Дорога в далёкое</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={nochpan} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Ночь</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={odinder} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Одиночество</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>

            <Card>
              <Card.Img margin="top" variant="top" src={nebotrava} />
              <a class="ajax-link" href="#">
                <div class="grid-hover">
                  <h1>Болото</h1>
                  <p>Myafix</p>
                </div>
              </a>
            </Card>
          </CardGroup>
        </Container>
      </div>
    );
  }
}
