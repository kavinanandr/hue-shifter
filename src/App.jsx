import { useState } from "react";
import logo from "./assets/logo.png";

function App() {
  const [color, setColor] = useState("bg-lime-700");

  return (
    <>
      <div className={`w-screen h-screen text-white ${color} flex flex-col`}>
        <header className="p-4 justify-self-start flex">
          <figure>
            <img
              src={logo}
              alt="logo"
              width="256px"
              height="256px"
              className="w-10 h-10 md:portrait:w-14 md:portrait:h-14 md:landscape:w-12 md:landscape:h-12"
            />
          </figure>
          <h1 className="m-1 text-2xl font-bold md:text-3xl md:portrait:mt-2">
            Hue Shifter
          </h1>
        </header>
        <main className="bg-white rounded-3xl p-4 m-4 my-auto self-center flex flex-wrap gap-2 justify-evenly md:rounded-full lg:text-2xl">
          <button
            className="bg-red-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer"
            onClick={() => setColor("bg-red-500")}
          >
            Red
          </button>
          <button
            className="bg-green-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer"
            onClick={() => setColor("bg-green-500")}
          >
            Green
          </button>
          <button
            className="bg-blue-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer"
            onClick={() => setColor("bg-blue-500")}
          >
            Blue
          </button>
          <button
            className="bg-orange-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer"
            onClick={() => setColor("bg-orange-500")}
          >
            Orange
          </button>
          <button
            className="bg-pink-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer"
            onClick={() => setColor("bg-pink-500")}
          >
            Pink
          </button>
          <button
            className="bg-purple-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer"
            onClick={() => setColor("bg-purple-500")}
          >
            Purple
          </button>
          <button
            className="bg-violet-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer"
            onClick={() => setColor("bg-violet-500")}
          >
            Violet
          </button>
        </main>
      </div>
    </>
  );
}

export default App;
