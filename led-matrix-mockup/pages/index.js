import Head from "next/head";
import { useEffect, useState } from "react";
import LedMatrix from "../components/LedMatrix";
import { blackMatrix } from "../lib/utils";

function Home() {
  let [matrix, setMatrix] = useState(blackMatrix());

  const updateMatrix = async () => {
    let res = await fetch("/api/get-matrix-state");
    let { matrix } = await res.json();
    setMatrix(matrix);
  };

  let [timer, setTimer] = useState(null);
  useEffect(() => {
    if (timer) {
      clearInterval(timer);
      // clearTimeout(timer);
      setTimer(null);
    } else {
      setTimer(setInterval(updateMatrix, 100));
      // setTimer(setTimeout(updateMatrix, 1000));
    }
  }, []);

  return (
    <div className="fullscreen center">
      <Head>
        <title>Mockup Matriz LED</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <LedMatrix matrix={matrix} />
      </main>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        :root,
        html,
        body {
          margin: 0;
          padding: 0;
          background-color: black;
        }

        .fullscreen {
          height: 100vh;
          width: 100vw;
        }

        .center {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        main {
          width: min-content;
        }
      `}</style>
    </div>
  );
}

export default Home;
