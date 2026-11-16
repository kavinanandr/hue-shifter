import { useState } from "react";

function App() {
  return (
    <>
      <div className="w-screen h-screen text-white bg-lime-700 flex flex-col">
        <header className="p-4 justify-self-start">
          <h1 className="text-2xl font-bold md:text-3xl">Hue Shifter</h1>
        </header>
        <main className="bg-white rounded-3xl p-4 m-4 my-auto self-center flex flex-wrap gap-2 justify-evenly md:rounded-full lg:text-2xl">
          <button className="bg-red-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer">
            Red
          </button>
          <button className="bg-green-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer">
            Green
          </button>
          <button className="bg-blue-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer">
            Blue
          </button>
          <button className="bg-orange-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer">
            Orange
          </button>
          <button className="bg-pink-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer">
            Pink
          </button>
          <button className="bg-purple-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer">
            Purple
          </button>
          <button className="bg-violet-500 rounded-full px-4 py-2 hover:brightness-150 hover:cursor-pointer">
            Violet
          </button>
        </main>
      </div>
    </>
  );
}

export default App;
