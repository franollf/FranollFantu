import { Code2, Palette, Rocket } from 'lucide-react';
import runningImage from "../images/franoll_half.jpg";

const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate software developer and a dedicated computer science student at Simon Fraser University. I specialize on frontend, but also have experience working on fullstack and whatever I need to learn to make my creativity happen. I love to challenge myself and build things that are out of my capabilites so I can grow and learn.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not brainstorming for my next project or cramming for an exam, you can definetly find me outside! Whether its training for my next race or simply just going on walks with no destination, I'll be outside :) 
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                <Code2 className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                <p className="text-sm text-gray-400">Clean Code</p>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                <Palette className="w-8 h-8 mx-auto mb-3 text-emerald-400" />
                <p className="text-sm text-gray-400">UI/UX Design</p>
              </div>
              <div className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300">
                <Rocket className="w-8 h-8 mx-auto mb-3 text-cyan-400" />
                <p className="text-sm text-gray-400">Innovation</p>
              </div>
            </div>
          </div>

          {/* Overlapping Images */}
          <div className="relative w-96 h-96 mx-auto">
            {/* Circle 1 */}
            <div className="absolute top-0 left-0 w-89 h-70 rounded-full overflow-hidden border-4 border-gray-800 z-10">
              <div className="w-full h-full bg-gradient-to-br from-cyan-500/20 to-emerald-500/20 flex items-center justify-center">
                <img
                  src={runningImage}
                  alt="Franoll running"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

              </div>
            </div>
          </div>
    </section>
  );
};

export default About;
