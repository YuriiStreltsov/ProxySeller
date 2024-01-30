import React, { Component, ErrorInfo } from "react";

import EmojiImg from "./emoji.webp";
import s from "./ErrorBoundary.module.css";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  override componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("ErrorBoundary  componentDidCatch  errorInfo:", errorInfo);
    console.log("ErrorBoundary  componentDidCatch  error:", error);
    console.error("ErrorBoundary caught an error: ", error, errorInfo);
    this.setState({ hasError: true });
  }

  override render() {
    if (this.state.hasError) {
      return (
        <div className={s.page}>
          <div className={s.container}>
            <div
              className={s.image}
              style={{ backgroundImage: `url(${EmojiImg})` }}
            ></div>
            <h1 className={s.text}>OOPS! SOMETHING WENT WRONG</h1>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
