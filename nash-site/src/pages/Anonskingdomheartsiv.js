// import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import Anonskingdomheartsivbig from "../../public/img/blog/Anonskingdomheartsivbig.png";

// export default function App() {
//   return (
//     <div className="bgcolor">
//       <p className="ramka">
//         <img className="imgblogtext" src={Anonskingdomheartsivbig} />
//         <p className="posttext">
//           <PageComponent />
//         </p>
//       </p>
//     </div>
//   );
// }

// const PageComponent = () => {
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:3000/Anonskingdomheartsiv.md")
//       .then((res) => res.text())
//       .then((text) => setContent(text));
//   }, []);

//   return (
//     <div className="post">
//       <ReactMarkdown children={content} />
//     </div>
//   );
// };