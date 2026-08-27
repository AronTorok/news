import { useState } from "react";
import NavLink from "./NavLink";

function App() {
  const [hamButton, setHamButton] = useState(false);

  function handleClick() {
    setHamButton(!hamButton);
  }

  return (
    <>
      <div className="bg-[rgba(255,255,255,0.95)]">
        <h1 className="text-center text-8xl overflow-hidden pt-2">FAKE NEWS</h1>
        <div className="flex justify-between sm:flex-row flex-col items-center p-2">
          <div className="flex justify-between sm:w-fit w-full">
            <img src="fn.svg" alt="Logo" className="w-10" />
            <a
              onClick={handleClick}
              className="hover:text-zinc-500 cursor-pointer sm:hidden"
            >
              {!hamButton ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="M20 17.5a1.5 1.5 0 0 1 .144 2.993L20 20.5H4a1.5 1.5 0 0 1-.144-2.993L4 17.5zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 0 1 0-3zm0-7a1.5 1.5 0 0 1 0 3H4a1.5 1.5 0 1 1 0-3z"
                      />
                    </g>
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        d="m12 14.122l5.303 5.303a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.304a1.5 1.5 0 1 0 2.122 2.12z"
                      />
                    </g>
                  </svg>
                </>
              )}
            </a>
          </div>
          <div className="flex sm:flex-row flex-col items-center gap-5">
            <NavLink
              name="Home"
              hamButton={hamButton}
              setHamButton={setHamButton}
            />
            <NavLink
              name="World"
              hamButton={hamButton}
              setHamButton={setHamButton}
            />
            <NavLink
              name="U.S."
              hamButton={hamButton}
              setHamButton={setHamButton}
            />
            <NavLink
              name="Politics"
              hamButton={hamButton}
              setHamButton={setHamButton}
            />
            <NavLink
              name="Business"
              hamButton={hamButton}
              setHamButton={setHamButton}
            />
            <NavLink
              name="Sports"
              hamButton={hamButton}
              setHamButton={setHamButton}
            />
            <NavLink
              name="More"
              hamButton={hamButton}
              setHamButton={setHamButton}
            />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className={`cursor-pointer hover:text-zinc-500 self-end mb-1.5 ${hamButton ? "" : "max-sm:hidden"}`}
            onClick={() => {
              setHamButton(false);
            }}
          >
            <path
              fill="currentColor"
              d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
            />
          </svg>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6 m-6">
        <div className="bg-[rgba(255,255,255,0.95)] xl:col-span-3 md:col-span-4 col-span-12 p-4 order-2 xl:order-1">
          <h1 className="text-2xl">
            CIA Realizes It’s Been Using Black Highlighters All These Years
          </h1>
          <img src="2.jpg" alt="2" className="py-4" />
          <p>
            LANGLEY, VA—A report released Tuesday by the CIA’s Office of the
            Inspector General revealed that the CIA has mistakenly obscured
            hundreds of thousands of pages of critical intelligence information
            with black highlighters.
          </p>
        </div>
        <div className="bg-[rgba(255,255,255,0.95)] xl:col-span-6 md:col-span-8 col-span-12 p-4 order-1 xl:order-2">
          <h1 className="text-3xl pb-4">
            Kitten Thinks Of Nothing But Murder All Day
          </h1>
          <img src="1.jpg" alt="" />
        </div>
        <div className="bg-[rgba(255,255,255,0.95)] xl:col-span-3 col-span-12 p-4 gap-5 order-3 flex xl:flex-col sm:flex-row flex-col">
          <div>
            <h1 className="text-2xl pb-2">
              World Death Rate Holding Steady At 100 Percent
            </h1>
            <p>
              GENEVA, SWITZERLAND—World Health Organization officials expressed
              disappointment Monday at the group’s finding that, despite the
              enormous efforts of doctors, rescue workers and other medical
              professionals worldwide, the global death rate remains constant at
              100 percent.
            </p>
          </div>
          <div className="border-t sm:max-xl:border-r border-zinc-300 mb-1 sm:max-xl:mb-0"></div>
          <div>
            <h1 className="text-2xl pb-2">
              Children, Creepy Middle-Aged Weirdos Swept Up In Harry Potter
              Craze
            </h1>
            <p>
              HOLLYWOOD, CA—Harry Potter And The Sorcerer’s Stone, the hit film
              about an orphaned boy and his pals at Hogwarts School Of
              Witchcraft And Wizardry, continues to break box-office records,
              casting its magic spell over children and creepy middle-aged
              weirdos alike.
            </p>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.95)] p-4 order-4 col-span-12">
          This website contains information from an{" "}
          <a
            href="https://ew.com/article/2013/08/29/the-onion-greatest-headlines/"
            className="link"
          >
            Entertaintment Weekly article
          </a>
          , which, in itself, showcases a selection of{" "}
          <a href="https://theonion.com/" className="link">
            The Onion articles
          </a>
          . If you would like to see some of my other works, go to my{" "}
          <a href="https://arontorok.github.io/" className="link">
            portfolio website
          </a>{" "}
          (https://arontorok.github.io/).
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 p-2 bg-[rgba(255,255,255,0.95)]">
        <img src="fn.svg" alt="Logo" className="w-10" />
        <NavLink name="Home" />
        <NavLink name="World" />
        <NavLink name="U.S." />
        <NavLink name="Politics" />
        <NavLink name="Business" />
        <NavLink name="Sports" />
        <NavLink name="More" />
      </div>
    </>
  );
}

export default App;
