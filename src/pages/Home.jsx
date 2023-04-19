import React from "react";
import Typed from "typed.js";

function Home() {
  const element = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(element.current, {
      strings: [
        "Hi. ^500 I'm Jolo.",
        "^700 I love coding.",
        "^700 This is my personal site.",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1500,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="home">
      <h1>
        <span ref={element} />
      </h1>
    </div>
  );
}

export default Home;
