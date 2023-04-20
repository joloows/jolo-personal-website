import React from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="home"
    >
      <h1>
        <span ref={element} />
      </h1>
    </motion.div>
  );
}

export default Home;
