import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function AnimatedLaptop() {
  return (
    <motion.div
      className="w-full max-w-lg mx-auto flex items-center justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="relative w-full aspect-[16/10] flex items-center justify-center">
        {/* Laptop Base */}
        <motion.div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl"
          initial={{ rotateX: 15 }}
          animate={{ rotateX: 5 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            transformStyle: "preserve-3d",
            transformPerspective: 1000,
          }}
        >
          {/* Screen Bezel */}
          <div className="absolute top-0 left-0 right-0 h-8 bg-gray-900 rounded-t-xl flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>

          {/* Screen */}
          <div className="absolute top-8 left-0 right-0 bottom-0 bg-gray-950 rounded-b-xl overflow-hidden">
            {/* Screen Content */}
            <div className="absolute inset-0 m-4 border border-gray-700 rounded-md overflow-hidden">
              {/* Terminal Content */}
              <div className="absolute inset-0 bg-black p-4">
                <div className="h-full w-full text-green-400 font-mono text-sm leading-relaxed overflow-hidden">
                  <Typewriter
                    words={[
                      "$ npm run dev\n✔ Compiled successfully\n> Ready on http://localhost:3000",
                      "$ git commit -m 'Implement professional portfolio'\n✔ [main 1a2b3c4] Implement professional portfolio",
                      "$ deploy --production\n✔ Deployment successful\n> https://hardik-daim.vercel.app",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="_"
                    typeSpeed={30}
                    deleteSpeed={20}
                    delaySpeed={2000}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Keyboard Area */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-11/12 h-4 bg-gray-900 rounded-b-md"></div>
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-10/12 h-4 bg-gray-800 rounded-b-md"></div>
        </motion.div>

        {/* Subtle Glow */}
        <motion.div
          className="absolute inset-0 rounded-xl pointer-events-none"
          initial={{ boxShadow: "0 0 0 rgba(59, 130, 246, 0)" }}
          animate={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>
    </motion.div>
  );
}
