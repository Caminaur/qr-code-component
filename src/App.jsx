import qrImage from "../src/assets/image-qr-code.png";

function App() {
  return (
    <div className="h-dvh w-dvw flex justify-center items-center bg-neutral-slate-300 relative">
      <div
        className="
          w-full max-w-90 mx-4 p-4 
          bg-neutral-white rounded-3xl 
          flex flex-col items-center gap-4 
          hover:scale-102 hover:shadow-[0_4px_10px_rgba(0,0,0,.1)] transition ease-in cursor-pointer
      "
      >
        <img className="rounded-2xl" src={qrImage} alt="" />
        <div className="flex flex-col gap-2 px-6 max-[370px]:px-1 py-4">
          <p className="text-lg text-center font-bold text-neutral-slate-900">
            Improve your front-end skills by building projects
          </p>
          <p className="text-md px-2 text-center text-neutral-500">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
      <div className="text-md absolute bottom-2 text-center text-neutral-slate-900 max-sm:text-xs sm:text-neutral-slate-700 max-sm:text-neutral-slate-500">
        <a
          className="attribution"
          href="https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H"
        >
          Challenge
        </a>{" "}
        coded by{" "}
        <a
          href="https://github.com/Caminaur/Mortgage-Calculator"
          className="attribution"
        >
          Julian Caminaur
        </a>
        .
      </div>
    </div>
  );
}

export default App;
