import React, { useContext } from "react";
import { Link, Links } from "react-router";
import { ThemeContext } from "../provider/themecontextprovider";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="flex justify-center items-center bg-base-300 shadow-xl">
      <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 font-poppins w-[1000px]">
        <aside>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="91.4658 93.6004 265 153.7408"
            width="75px"
            height="45px"
          >
            <g
              transform="matrix(0.10000000149011612, 0, 0, -0.10000000149011612, 23.96577072143554, 370.4364318847656)"
              {...(theme === "dark" ? { fill: "white" } : { fill: "black" })}
              stroke="none"
            >
              <path d="M1437 2764 c-4 -4 -7 -45 -7 -91 0 -67 -3 -83 -15 -83 -20 0 -19 -24 0 -40 9 -7 14 -19 11 -26 -3 -7 -6 -86 -7 -175 -2 -148 -3 -162 -20 -166 -24 -7 -25 -46 -3 -64 15 -12 16 -31 11 -148 l-6 -133 27 5 c15 3 40 10 55 16 l28 11 -3 117 c-3 101 -1 120 15 136 23 23 22 57 -1 57 -17 0 -20 12 -25 107 -11 176 -9 253 8 269 21 21 19 34 -5 34 -17 0 -19 8 -22 87 -2 70 -6 88 -18 91 -9 1 -19 0 -23 -4z" />
              <path d="M2527 2764 c-4 -4 -7 -45 -7 -91 0 -76 -2 -83 -20 -83 -23 0 -27 -28 -5 -36 17 -7 20 -86 9 -267 -6 -91 -9 -106 -25 -110 -24 -6 -25 -43 -1 -58 15 -9 17 -25 14 -130 l-4 -119 29 -11 c15 -6 40 -13 55 -16 l27 -5 -6 133 c-5 117 -4 136 11 148 23 19 21 61 -3 61 -17 0 -18 12 -20 158 -1 86 -4 166 -7 178 -3 12 1 26 10 33 20 17 21 41 1 41 -11 0 -15 19 -17 87 -2 70 -6 88 -18 91 -9 1 -19 0 -23 -4z" />
              <path d="M1808 2283 c-190 -138 -198 -146 -198 -233 0 -59 20 -90 48 -73 11 6 93 28 182 48 l162 36 161 -36 c88 -20 169 -42 179 -48 40 -25 62 59 38 143 -9 30 -35 53 -184 160 -96 69 -182 126 -193 128 -10 2 -92 -50 -195 -125z" />
              <path d="M1295 1983 c-161 -127 -401 -271 -565 -339 l-55 -23 75 -1 c89 0 311 -24 430 -45 232 -43 512 -134 686 -224 54 -27 100 -49 102 -47 8 9 -169 139 -256 187 -165 91 -326 148 -514 180 -38 6 -68 12 -68 14 0 1 26 29 58 61 73 75 166 182 181 211 12 24 15 83 4 82 -5 0 -39 -25 -78 -56z" />
              <path d="M2620 2009 c0 -17 5 -40 11 -52 14 -26 99 -126 182 -213 l58 -62 -73 -12 c-97 -17 -227 -51 -313 -84 -145 -56 -326 -164 -426 -255 l-44 -40 135 67 c194 96 428 172 672 217 115 21 345 45 433 45 l70 0 -75 33 c-171 75 -329 169 -523 314 -54 40 -100 73 -103 73 -2 0 -4 -14 -4 -31z" />
              <path d="M1830 1994 c-152 -36 -180 -51 -180 -99 0 -19 -11 -25 -102 -49 -158 -41 -213 -75 -233 -143 -5 -19 -1 -23 37 -33 211 -56 456 -182 601 -310 l47 -42 48 42 c143 127 389 254 599 309 35 10 40 14 36 34 -17 70 -75 105 -248 148 -75 19 -85 24 -85 44 0 48 -27 63 -185 100 -82 19 -159 34 -170 34 -11 0 -85 -16 -165 -35z" />
              <path d="M1041 1399 c-74 -71 -132 -131 -130 -134 3 -2 77 2 164 10 317 28 704 15 851 -30 59 -18 57 -18 48 -4 -9 15 -116 63 -184 82 -110 31 -179 39 -377 46 l-203 6 55 55 c30 30 54 60 55 66 0 10 -93 34 -129 34 -9 -1 -76 -59 -150 -131z" />
              <path d="M2728 1518 c-27 -6 -48 -15 -48 -20 0 -5 25 -36 57 -69 l56 -59 -163 0 c-185 0 -332 -18 -447 -56 -73 -24 -169 -71 -161 -80 2 -2 26 3 53 11 147 45 534 58 850 30 87 -8 161 -12 164 -10 2 3 -56 63 -130 134 -144 140 -140 138 -231 119z" />
            </g>
          </svg>
          <p className="opacity-70 font-light font-kufi">
            القرآن والسنة
            <br />
            Qur'an Sunnah 2025
          </p>
        </aside>
        <nav className="font-hind">
          <h6 className="footer-title">সেবা সমূহ</h6>
          <Link to={"/quran"} className="link link-hover">
            কুরআন পড়ুন
          </Link>
          <Link to={"/hadith"} className="link link-hover">
            হাদিস পড়ুন
          </Link>
          <Link to={"/fatwa"} className="link link-hover">
            ইসলামী ফতোয়া
          </Link>
        </nav>
        <nav className="font-hind">
          <h6 className="footer-title">প্রতিষ্ঠান</h6>
          <Link className="link link-hover" to={"/aboutus"}>
            আমাদের সম্পর্কে
          </Link>
          <Link className="link link-hover" to={"/contactus"}>
            যোগাযোগ করুন
          </Link>
          <Link className="link link-hover" to={"/donation"}>
            ডোনেশন
          </Link>
        </nav>
        <nav className="font-hind">
          <h6 className="footer-title">আইনগত</h6>
          <Link className="link link-hover" to={"/termsofuse"}>
            ব্যবহারের শর্তাবলী
          </Link>
          {/* <a className="link link-hover">গোপনীয়তা নীতি</a>
          <a className="link link-hover">কুকি নীতি</a> */}
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
