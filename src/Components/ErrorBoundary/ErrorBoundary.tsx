import { useRouteError } from "react-router-dom";

import EmojiImg from "./emoji.webp";
import s from "./ErrorBoundary.module.scss";

export default function ErrorBoundary() {
  const error = useRouteError() as Error;

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div
          className={s.image}
          style={{ backgroundImage: `url(${EmojiImg})` }}
        ></div>
        <h1 className={s.text}>OOPS! SOMETHING WENT WRONG</h1>
        <p className={s.text}>{error ? error.message : "Not found"}</p>
      </div>
    </div>
  );
}
