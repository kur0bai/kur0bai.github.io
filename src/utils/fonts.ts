import { Montserrat, Poppins } from "next/font/google";

const titleFontBold = Poppins({
  weight: "600",
  subsets: ["latin"],
});

const titleFont = Poppins({
  weight: "300",
  subsets: ["latin"],
});

const bodyFont = Montserrat({ weight: "400", subsets: ["latin"] });

export { titleFont, titleFontBold, bodyFont };
