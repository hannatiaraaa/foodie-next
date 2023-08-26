import Image from "next/image";
import smartphone from "assets/images/smartphone.svg";

export default function Home() {
  const openGithubMobile = () =>
    window.open("https://github.com/hannatiaraaa/foodie", "_blank");

  return (
    <main className="relative flex justify-center items-center">
      <div className="w-screen h-screen -z-10 overflow-hidden aspect-video pointer-events-none">
        <iframe
          src="https://www.youtube-nocookie.com/embed/sv3TXMSv6Lw?controls=0&autoplay=1&mute=1&end=80&loop=1&playlist=sv3TXMSv6Lw"
          allowFullScreen
          className="h-[110vh] mt-[-10vh] lg:mt-0 lg:h-screen lg:w-[300vw] lg:ml-[-100vw] aspect-video"
        ></iframe>
      </div>

      <div className="absolute w-screen h-screen lg:w-auto flex justify-center items-center lg:items-end lg:bottom-[5vh] lg:ml-[20vw] z-10">
        <Image
          src={smartphone}
          className="hidden lg:block z-10 object-contain h-[85vh]"
          alt=""
        />

        <div className="bg-dark-background/70 lg:bg-transparent absolute py-8 px-8 h-2/3 lg:px-24 flex flex-col justify-around z-20 ">
          <div className="shrink-0 h-2/3 flex flex-col justify-end">
            <p className="text-orange-50 text-2xl md:text-3xl font-bold">
              Where Hunger Meets Your Passion
            </p>
            <p className="text-orange-50 text-xl xl:text-lg mt-4 font-medium">
              Release your intense interest in food from cooking to eating.
            </p>
          </div>

          <div className="shrink-0 w-full h-1/3 flex flex-col justify-evenly">
            <button className="btn btn-primary-gradient">
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
