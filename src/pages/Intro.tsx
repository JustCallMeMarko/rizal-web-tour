import { motion } from "motion/react";
import Germany from "../assets/Germany.jpg";
import NoliMeTangere from "../assets/Noli.jpg";
function Intro() {
  return (
    <>
      <section
        className="min-h-screen relative flex flex-col justify-center items-center"
        id="intro"
      >
        <h1 className="text-8xl font-medium font-head text-white">
          Noli Me Tangere
        </h1>
        <p className="text-lg text-white/50">a novel by José Rizal</p>
        <motion.img
          initial={{ y: 0 }}
          animate={{
        y: [0, -18, 0, 18, 0],    // slight left and right
          }}
          transition={{
        duration: 6,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
          }}
          src={NoliMeTangere}
          alt="Noli Me Tangere"
          className="absolute w-24 drop-shadow-amber-200 drop-shadow-2xl rotate-10 left-1/2 top-120 transform -translate-x-1/2 "
        />
      </section>
      <section className="h-fit flex flex-col gap-4 mt-40 px-94">
        <h1 className="text-4xl font-bold justify-self-start text-white">
          Introduction
        </h1>
        <div className="flex">
          <img src={Germany} alt="Germany" className="w-100 rounded-md mr-4" />
          <p className="text-white text-justify">
            Noli Me Tangere was published in 1887 in Berlin, Germany, during the
            late Spanish colonial era in the Philippines. During this time,
            Philippine society faced widespread corruption, friar exploitation,
            and social injustices caused by Spanish rule. During Rizal's time,
            Spanish colonization had created a society marked by rampant
            corruption and his sole purpose was to awaken national consciousness
            and inspire reform.
          </p>
        </div>
      </section>
    </>
  );
}

export default Intro;
