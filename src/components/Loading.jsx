import { FiLoader } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
      <div className="text-center">
       
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-violet-200 border-t-violet-600 dark:border-slate-700 dark:border-t-violet-500"
        >
          <FiLoader className="text-4xl text-violet-600 dark:text-violet-400" />
        </motion.div>

       
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 text-3xl font-black text-slate-900 dark:text-white"
        >
          Loading...
        </motion.h2>

        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-3 text-slate-600 dark:text-slate-400"
        >
          Please wait while we prepare your experience.
        </motion.p>

      
        <div className="mt-8 flex justify-center gap-2">
          <span className="h-3 w-3 animate-bounce rounded-full bg-violet-600"></span>
          <span
            className="h-3 w-3 animate-bounce rounded-full bg-violet-600"
            style={{ animationDelay: "0.2s" }}
          ></span>
          <span
            className="h-3 w-3 animate-bounce rounded-full bg-violet-600"
            style={{ animationDelay: "0.4s" }}
          ></span>
        </div>
      </div>
    </section>
  );
}