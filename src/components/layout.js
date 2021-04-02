import React from "react";
import "../assets/layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <main
        style={{
          backgroundImage: `url('/back.png')`,
          backgroundSize: "100% auto",
          backgroundPosition: "50% 0",
          backgroundRepeat: "repeat-y",
        }}
      >
        {children}
      </main>
      <footer>
        <div className="py-12 bg-white">
          <div className="max-w-screen-lg mx-auto px-2">
            <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4">
              <div className="le"></div>

              <div className="mm text-sm"></div>
              <div className="rt">
                <div className="flex justify-between items-center"></div>

                <div className="rt text-sm md:text-right flex items-center md:justify-end md:items-center px-6 md:px-0">
                  <img
                    alt="koala, like the animal"
                    className="w-10 mb-0"
                    src={require("../assets/images/k.svg")}
                  ></img>
                  <span className="text-gray-900 opacity-75 font-gt ml-4">
                    2021 KoalaDAO
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Layout;
