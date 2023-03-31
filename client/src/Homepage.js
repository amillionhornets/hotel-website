
import React from 'react';
// import Navbar from "./navbar";
// const inter = Inter({ subsets: ["latin"] });

function Homepage() {
  return (
    <>
      <main className=" bg-gradient-to-b from-teal-500 h-screen">
        {/* <Navbar></Navbar> */}
        <div>
          <h1 className=" text-center text-4xl text-amber-400 py-10">
            {" "}
            Tailwind Works!{" "}
          </h1>
          <h2 className=" text-center text-2xl text-amber-200 py-10">
            {" "}
            Make sure to design for mobile first!{" "}
          </h2>
        </div>
      </main>
    </>
  );
}
export default Homepage;