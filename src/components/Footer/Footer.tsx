// import header from "../../assets/images/header.jpg";
import { Magnetic } from "../../../components/ui/magnetic";
import header from "../../assets/images/alm.png";

const Footer = ({ page }: any) => {
  const options: any = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const formattedDate = new Date()
    .toLocaleDateString("en-US", options)
    .replace(",", "");

  console.log(page)

  return (
    <>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <div
          // className={`flex-1 px-20 max-sm:px-4  py-8     
          // flex flex-col`}
          className={`flex-1 px-20 max-sm:px-4 ${page ? "py-20" : "py-8"
            } flex flex-col`}
        >
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-6">
              <div className="relative w-16 h-16 rounded-full overflow-hidden">
                <img
                  src={header}
                  alt="Profile"
                  width={64}
                  height={64}
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 max-sm:mt-0 mb-16">
            <h1 className="text-6xl md:text-8xl font-light tracking-thin">
              Let's work
              <br />
              together
            </h1>
          </div>

          <div className="relative ">
            <hr className="border-gray-800" />

            <div className="absolute right-50 -top-30 max-sm:right-1 max-sm:-top-25">
              <Magnetic intensity={0.2} springOptions={{ bounce: 0.1 }} actionArea="global" range={200}>
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-full w-32 h-32 md:w-40 md:h-40 flex items-center justify-center cursor-pointer">
                  <Magnetic intensity={0.1} springOptions={{ bounce: 0.1 }} actionArea="global" range={200}>
                    <span className="text-sm md:text-base">Get in touch</span>
                  </Magnetic>
                </button>
              </Magnetic>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-8">
            <a
              href="mailto:alamalmaash@gmail.com"
              className="border border-gray-800 rounded-full py-3 px-6 hover:bg-gray-900 transition-colors text-center md:text-left"
              aria-label="email Us"
            >
              alamalmaash@gmail.com
            </a>
            <a
              href="tel:7079806009"
              className="border border-gray-800 rounded-full py-3 px-6 hover:bg-gray-900 transition-colors text-center md:text-left"
              aria-label="Call Us"
            >
              +91 7079806009
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="px-8 md:px-12 py-6 text-xs text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <p>VERSION</p>
                <p className="text-white mt-1">2025 © Edition</p>
              </div>
              <div>
                <p>LOCAL TIME</p>
                <p className="text-white mt-1">{`${formattedDate}`}</p>
              </div>
            </div>

            <div>
              <p>SOCIALS</p>
              <div className="flex gap-4 mt-1">
                <a
                  href="https://www.instagram.com/sheikhalmaash?igsh=MWpoZTc0a3hlczhiaw%3D%3D&utm_source=qr"
                  className="text-white hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow me on Instagram
                </a>

                <a
                  href="https://github.com/Almaash"
                  className="text-white hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check out my GitHub
                </a>

                <a
                  href="https://x.com/almaashalam?s=11"
                  className="text-white hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Follow me on Twitter (X)
                </a>

                <a
                  href="https://www.linkedin.com/in/almaash-alam-a96a291ab/"
                  className="text-white hover:text-gray-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Connect with me on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
