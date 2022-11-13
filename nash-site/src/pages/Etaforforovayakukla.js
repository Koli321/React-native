// import { useEffect, useState } from "react";
// import ReactMarkdown from "react-markdown";
// import forforbig from "../../public/img/blog/forforbig.png";

// export default function App() {
//   return (
//     <div className="bgcolor">
//       <p className="ramka">
//         <img className="imgblogtext" src={forforbig} />
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
//     fetch("http://localhost:3000/Etaforforovayakukla.md")
//       .then((res) => res.text())
//       .then((text) => setContent(text));
//   }, []);

//   return (
//     <div className="post">
//       <ReactMarkdown children={content} />
//     </div>
//   );
// };