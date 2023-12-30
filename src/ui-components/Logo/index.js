import Image from "next/image";
import Link from "next/link";
import logo from "./Logo.module.css"

const Logo = ({ width = "50", height = "50" }) => {
  return (
    <div>
      <Link href={`/`}>
        <Image src={"/user-pic.jpg"} width={width} height={height} alt="logo" className={logo["logo-image"]} />
      </Link>
    </div>
  );
};

export default Logo;
