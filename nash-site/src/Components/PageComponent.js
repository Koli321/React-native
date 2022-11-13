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
    <div className="bgcolor">
      <p className="ramka">
        <img className="imgblogtext" src={props.image} />
        <p className="posttext">
          <div className="post">
            <ReactMarkdown children={content} />
          </div>
        </p>
      </p>
    </div>
  );
};
