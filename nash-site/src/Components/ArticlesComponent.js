import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export const PageComponent = (props) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/${props.articleFileName}`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <Tab.Content>
      <Tab.Pane eventKey="Anime">
        <hr className="linia"></hr>
        <div class="d-flex align-items-center">
          <div class="flex-shrink-0" className="cart">
            <img className="imgblog" src="/img/blog/forfor.png" />
          </div>
          <div class="flex-grow-1 ms-3">
            <h5 className="nazblog">
              <a href="Etaforforovayakukla" className="ssilka">
                Косплей это культ|Эта фарфоровая кукла влюбилась
              </a>
            </h5>
            <p className="textblog">
              Я в теме так сказать. Анимешник из меня такой же, как и басс
              гитарист... Вот сколько тайтлов я только не пересмотрел за год
              (для меня по крайней мере это многовато). И вот не могу я понять
              эту усидчивость людей, которые сидят и смотрят за день весь сезон,
              хоть 25 хоть 12 серий...
            </p>
          </div>
        </div>
        <hr className="linia"></hr>
      </Tab.Pane>
    </Tab.Content>
  );
};
