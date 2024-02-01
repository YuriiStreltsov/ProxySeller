import { useRouteError } from "react-router-dom";

import EmojiImg from "./emoji.webp";
import s from "./ErrorBoundary.module.scss";

type ErrorBoundaryProps = {
  message?: string;
};

export default function ErrorBoundary({ message }: ErrorBoundaryProps) {
  const error = useRouteError() as Error;

  return (
    <div className={s.page}>
      <div className={s.container}>
        <div
          className={s.image}
          style={{ backgroundImage: `url(${EmojiImg})` }}
        ></div>
        <h1 className={s.text}>OOPS! SOMETHING WENT WRONG</h1>
        <p className={s.text}>
          {error ? error.message : message || "Not found"}
        </p>
      </div>
    </div>
  );
}
