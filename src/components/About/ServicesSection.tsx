import { Sparkles } from "lucide-react";

export default function ServicesSection() {
  return (
    <div className="bg-[#F8F6EE]  px-6 py-12 max-sm:py-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-4xl md:text-5xl tracking-tighter  text-gray-900">
            I can help you with...
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {/* Service 1 */}
          <div className="space-y-6">
            <div className="text-gray-400 mb-2">01</div>
            <div className="h-px bg-gray-300 w-full mb-6"></div>
            <h2 className="text-3xl  text-gray-900  tracking-thin">Design</h2>
            <p className="text-gray-700 text-lg">
              With a solid track record in designing websites, I deliver strong
              and user-friendly digital designs. (Since 2023 only in combination
              with development)
            </p>
          </div>

          {/* Service 2 */}
          <div className="space-y-6">
            <div className="text-gray-400 mb-2">02</div>
            <div className="h-px bg-gray-300 w-full mb-6"></div>
            <h2 className="text-3xl tracking-thin text-gray-900 ">
              Development
            </h2>
            <p className="text-gray-700  text-lg">
              I build scalable websites from scratch that fit seamlessly with
              design. My focus is on micro animations, transitions and
              interaction. Building with Webflow.
            </p>
          </div>

          {/* Service 3 */}
          <div className="space-y-6">
            <div className="text-gray-400 mb-2">03</div>
            <div className="h-px bg-gray-300 w-full mb-6"></div>
            <div className="flex items-center gap-2 ">
              <div className="text-gray-900">
                <Sparkles color="black" />
              </div>
              <h2 className="text-3xl tracking-thin text-gray-900">
                Complete Web Mastery
              </h2>
            </div>
            <p className="text-gray-700  text-lg">
              A complete website from concept to implementation, that's what
              makes me stand out. My great sense for design and my development
              skills enable me to create kick-ass projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
