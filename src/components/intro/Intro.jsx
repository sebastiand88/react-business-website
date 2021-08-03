import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 2000,
      backSpeed: 50,
      strings: ["description", "achievements", "aspirations"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://images.unsplash.com/photo-1587702068694-a909ef4aa346?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello! We are</h2>
          <h1>Your Business</h1>
          <h3>
            Your Business <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#services">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
