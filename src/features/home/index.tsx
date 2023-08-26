import Image from "next/image";
import smartphone from "assets/images/smartphone.svg";

export default function Home() {
  const desktopVideo =
    "https://www.youtube-nocookie.com/embed/sv3TXMSv6Lw?controls=0&autoplay=1&mute=1&end=80&loop=1&playlist=sv3TXMSv6Lw";
  const mobileVideo =
    "https://www.youtube.com/embed/8z86pQ7FMm4?controls=0&autoplay=1&mute=1&loop=1&playlist=8z86pQ7FMm4";

  const exploreFeature = () =>
    window.open("https://github.com/hannatiaraaa/foodie-next", "_blank");

  const openGithubMobile = () =>
    window.open("https://github.com/hannatiaraaa/foodie", "_blank");

  return (
    <main className="relative flex justify-center items-center">
      <div className="h-screen w-screen -z-10 overflow-hidden pointer-events-none ">
        <iframe
          src={desktopVideo}
          allowFullScreen
          className="hidden lg:block mt-0 h-screen w-[300vw] ml-[-100vw] aspect-video"
        ></iframe>

        <iframe
          src={mobileVideo}
          allow="autoplay; loop; encrypted-media; picture-in-picture"
          allowFullScreen
          className="h-[120vh] w-full object-cover my-[-10vh] lg:hidden"
        ></iframe>
      </div>

      <div className="bg-dark-background/40 lg:bg-transparent backdrop-blur-[0.5px] lg:backdrop-blur-none absolute h-screen  w-screen lg:w-auto flex justify-center items-end pb-16 lg:pb-8 lg:ml-[20vw] z-10">
        <Image
          src={smartphone}
          className="hidden lg:block z-10 object-contain h-[85vh]"
          alt=""
        />

        <div className="h-2/3 flex flex-col justify-around self-end py-8 px-10 lg:px-24 lg:absolute z-20">
          <div className=" h-2/3 shrink-0 flex flex-col justify-end">
            <p className="text-orange-50 font-bold text-2xl md:text-4xl xl:text-3xl">
              Where Hunger Meets Your Passion
            </p>
            <p className="text-orange-50 font-medium mt-4 text-xl md:text-2xl xl:text-lg">
              Release your intense interest in food from cooking to eating.
            </p>
          </div>

          <div className="shrink-0 w-full h-1/3 flex flex-col justify-evenly">
            <button
              className="btn btn-primary-gradient"
              onClick={exploreFeature}
            >
              <p className="btn-title text-orange-50">Try now</p>
            </button>
            <button
              className="btn btn-secondary backdrop-blur-md"
              onClick={openGithubMobile}
            >
              <p className="btn-title text-primary-orange">Download app</p>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
