import { StrictMode } from "react";
import { useState } from "react";
import { createRoot } from "react-dom/client";
// import StarRating from "./StarRating";
import style from "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
//       <p> this movie was ratedt {movieRating} stars </p>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
