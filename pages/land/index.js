import Layout from "pages/components/layout";
import Image from "next/image";
import landImage from "public/images/slides/land.png";
import { bgs } from "lib/bg.config";

export default function land() {
  return (
    <Layout bgImage={bgs.land}>
      <Image src={landImage} alt="Land" className="fixed top-150 left-2" />
      <p className="bg-[#cedad8] fixed top-[200px] w-[600px] p-4">
        <span className="font-bold">Our land </span>is situated along the
        beautiful coast of Oaxaca, offering easy accessibility from Mexico City
        within just an hour’s flight. The property is conveniently located only
        30 minutes away from the center of Puerto Escondido and a short
        10-minute drive from the main airport. Additionally, it is in close
        proximity to other popular beaches in the region such as Mazunte, San
        Agustinillo, and Zipolite. To reach our land, simply take the Carretera
        Costera road and continue through the town of Ventanilla from Puerto
        Escondido. that we hope you will be a part of.
      </p>
    </Layout>
  );
}
