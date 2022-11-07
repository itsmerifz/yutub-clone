import React from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "../assets/logo.png";

const Sidebar = () => {
  return (
    <div className="h-screen flex w-80 bg-[#0f0f0f] text-white flex-col overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-xl scrollbar-thumb-gray-500">
      <div
        id="header-wrapper"
        className="flex flex-row items-center justify-start p-3"
      >
        <button className="text-2xl mx-3 w-9 h-9 flex items-center justify-center rounded-full hover:bg-[#515561] hover:cursor-pointer">
          <FiMenu />
        </button>
        <img src={Logo} className="ml-3 font-bold text-xl w-24"></img>
      </div>

      <main id="sidebar-wrapper" className="text-white p-1 mx-5 mt-2">
        <div
          id="main"
          className="border-b border-[#2a2a2a] hover:cursor-pointer"
        >
          <div
            id="home"
            className="flex flex-row items-center rounded-xl hover:bg-[#515561] p-2"
          >
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "30px",
                height: "30px",
                fill: "#fff",
              }}
            >
              <g>
                <path d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"></path>
              </g>
            </svg>
            <span className="ml-4 text-base">Beranda</span>
          </div>
          <div
            id="shorts"
            className="flex flex-row items-center rounded-xl hover:bg-[#515561] p-2"
          >
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "30px",
                height: "30px",
                fill: "#fff",
              }}
            >
              <g height="24" viewBox="0 0 24 24" width="24">
                <path
                  d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span className="ml-4 text-base">Shorts</span>
          </div>
          <div
            id="subscriptions"
            className="flex flex-row items-center rounded-xl hover:bg-[#515561] p-2 mb-4"
          >
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "30px",
                height: "30px",
                fill: "#fff",
              }}
            >
              <g class="style-scope yt-icon">
                <path
                  d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span className="ml-4 text-base">Subscription</span>
          </div>
        </div>

        <div
          id="second"
          className="border-b border-[#2a2a2a] hover:cursor-pointer mt-3"
        >
          <div
            id="collection"
            className="flex flex-row items-center rounded-xl hover:bg-[#515561] p-2"
          >
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "30px",
                height: "30px",
                fill: "#fff",
              }}
            >
              <g class="style-scope yt-icon">
                <path
                  d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span className="ml-4 text-base">Koleksi</span>
          </div>
          <div
            id="history"
            className="flex flex-row items-center rounded-xl hover:bg-[#515561] p-2"
          >
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "30px",
                height: "30px",
                fill: "#fff",
              }}
            >
              <g class="style-scope yt-icon">
                <path
                  d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span className="ml-4 text-base">Histori</span>
          </div>
          <div
            id="your-video"
            className="flex flex-row items-center rounded-xl hover:bg-[#515561] p-2"
          >
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "30px",
                height: "30px",
                fill: "#fff",
              }}
            >
              <g class="style-scope yt-icon">
                <path
                  d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span className="ml-4 text-base">Video Anda</span>
          </div>
          <div
            id="watch-later"
            className="flex flex-row items-center rounded-xl hover:bg-[#515561] p-2"
          >
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "30px",
                height: "30px",
                fill: "#fff",
              }}
            >
              <g class="style-scope yt-icon">
                <path
                  d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span className="ml-4 text-base">Tonton Nanti</span>
          </div>
          <div
            id="liked-video"
            className="flex flex-row items-center rounded-xl hover:bg-[#515561] p-2 mb-4"
          >
            <svg
              viewBox="0 0 24 24"
              preserveAspectRatio="xMidYMid meet"
              focusable="false"
              style={{
                pointerEvents: "none",
                display: "block",
                width: "30px",
                height: "30px",
                fill: "#fff",
              }}
            >
              <g class="style-scope yt-icon">
                <path
                  d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"
                  class="style-scope yt-icon"
                ></path>
              </g>
            </svg>
            <span className="ml-4 text-base">Liked Videos</span>
          </div>
        </div>
        <div id="subs" className="mt-3">
          Langganan
          <div id="lists" className="mt-2 hover:cursor-pointer">
            <div>
              <div className="flex items-center rounded-xl hover:bg-[#515561] p-2">
                <div className="flex justify-between items-center mr-5">
                  <div className="h-[30px] w-[30px] block float-none">
                    <img
                      src="https://i.pravatar.cc/30?u=11"
                      alt="avatar"
                      className="rounded-full"
                    />
                  </div>
                  <span className="ml-4 mr-3 text-base">Ucup Gans</span>
                </div>
                <svg
                  viewBox="0 0 24 24"
                  preserveAspectRatio="xMidYMid meet"
                  focusable="false"
                  style={{
                    pointerEvents: "none",
                    display: "block",
                    width: "24px",
                    height: "24px",
                    fill: "#ff0000",
                  }}
                >
                  <g class="style-scope yt-icon">
                    <path
                      d="M14,12c0,1.1-0.9,2-2,2s-2-0.9-2-2s0.9-2,2-2S14,10.9,14,12z M8.48,8.45L7.77,7.75C6.68,8.83,6,10.34,6,12 s0.68,3.17,1.77,4.25l0.71-0.71C7.57,14.64,7,13.39,7,12S7.57,9.36,8.48,8.45z M16.23,7.75l-0.71,0.71C16.43,9.36,17,10.61,17,12 s-0.57,2.64-1.48,3.55l0.71,0.71C17.32,15.17,18,13.66,18,12S17.32,8.83,16.23,7.75z M5.65,5.63L4.95,4.92C3.13,6.73,2,9.24,2,12 s1.13,5.27,2.95,7.08l0.71-0.71C4.02,16.74,3,14.49,3,12S4.02,7.26,5.65,5.63z M19.05,4.92l-0.71,0.71C19.98,7.26,21,9.51,21,12 s-1.02,4.74-2.65,6.37l0.71,0.71C20.87,17.27,22,14.76,22,12S20.87,6.73,19.05,4.92z"
                      class="style-scope yt-icon"
                    ></path>
                  </g>
                </svg>
              </div>
              <div className="flex items-center rounded-xl hover:bg-[#515561] p-2">
                <div className="h-[30px] w-auto">
                  <img
                    src="https://i.pravatar.cc/30?u=12"
                    alt="avatar"
                    className="rounded-full"
                  />
                </div>
                <span className="ml-4 text-base">Gank Gaming</span>
              </div>
              <div className="flex items-center rounded-xl hover:bg-[#515561] p-2">
                <img
                  src="https://i.pravatar.cc/30?u=21"
                  width={30}
                  alt="avatar"
                  className="rounded-full"
                />
                <span className="ml-4 text-base">Udean Vlog</span>
              </div>
              <div className="flex items-center rounded-xl hover:bg-[#515561] p-2">
                <img
                  src="https://i.pravatar.cc/30?u=33"
                  width={30}
                  alt="avatar"
                  className="rounded-full"
                />
                <span className="ml-4 text-base">Sam TV</span>
              </div>
              <div className="flex items-center rounded-xl hover:bg-[#515561] p-2">
                <img
                  src="https://i.pravatar.cc/30?u=31"
                  width={30}
                  alt="avatar"
                  className="rounded-full"
                />
                <span className="ml-4 text-base">Hyrix Channel</span>
              </div>
              <div className="flex items-center rounded-xl hover:bg-[#515561] p-2">
                <img
                  src="https://i.pravatar.cc/30?u=36"
                  width={30}
                  alt="avatar"
                  className="rounded-full"
                />
                <span className="ml-4 text-base">Megan Soup</span>
              </div>
              <div className="flex items-center rounded-xl hover:bg-[#515561] p-2">
                <img
                  src="https://i.pravatar.cc/30?u=399"
                  width={30}
                  alt="avatar"
                  className="rounded-full"
                />
                <span className="ml-4 text-base">Channel OnZe</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Sidebar;
