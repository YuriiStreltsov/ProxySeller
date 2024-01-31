import { useRouteError } from "react-router-dom";

import EmojiImg from "./emoji.webp";
import s from "./ErrorBoundary.module.css";

export default function ErrorBoundary() {
  const error = useRouteError() as Error;
  console.log(error.cause);

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div
          className={s.image}
          style={{ backgroundImage: `url(${EmojiImg})` }}
        ></div>
        <h1 className={s.text}>OOPS! SOMETHING WENT WRONG</h1>
        <p className={s.text}>{error.message}</p>
      </div>
    </div>
  );
}
