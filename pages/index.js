import Image from "next/image";

import { useTheme } from "next-themes";

import lightLamp from "../public/on.png";
import darkLamp from "../public/off.png";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const BtnChangeToDark = () => {
    return (
      <button onClick={() => setTheme("dark")}>
        <Image src={darkLamp} alt="DarkIcon" height="50px" width="50px" />
      </button>
    );
  };

  const BtnChangeToLight = () => {
    return (
      <button onClick={() => setTheme("light")}>
        <Image src={lightLamp} alt="LightIcon" height="50px" width="50px" />
      </button>
    );
  };

  return (
    <div className="h-screen text-3xl  grid place-items-center">
      {theme === "dark" ? <BtnChangeToLight /> : <BtnChangeToDark />}
    </div>
  );
}
