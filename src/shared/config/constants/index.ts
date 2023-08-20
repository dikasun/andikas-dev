import {
  Lato,
  Manrope,
  Montserrat,
  Nunito,
  Plus_Jakarta_Sans,
  Roboto,
} from "next/font/google";

const imageHeroStyle = {
  borderTopLeftRadius: "25%",
  borderTopRightRadius: "25%",
  borderBottomRightRadius: "25%",
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";
const revalidateTime = 604800;

const jakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400"] });
const nunito = Nunito({ subsets: ["latin"] });

export {
  imageHeroStyle,
  baseUrl,
  revalidateTime,
  jakartaSans,
  manrope,
  roboto,
  montserrat,
  lato,
  nunito,
};
