"use client"

import { useEffect } from "react"
import { CrowserData } from "../../assets/data/CrowserData"
import CrowserCard from "../ui/CrowserCard"
import useMeasure from "react-use-measure"
import { motion, animate, useMotionValue } from "framer-motion"

function Crowser() {
  let [ref, { width: singleWidth }] = useMeasure() // ✅ sirf ek set ka width
  const xTranslation = useMotionValue(0)

  useEffect(() => {
    let controls
    if (singleWidth > 0) {
      controls = animate(xTranslation, [0, -singleWidth], {
        ease: "linear",
        duration: 40,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      })
    }
    return () => controls?.stop()
  }, [xTranslation, singleWidth])

  return (
    <div className="max-sm:w-full w-7/8 mx-auto py-10 px-10 rounded-xl overflow-hidden bg-gradient-to-r from-[#FEEEE6] to-[#f7e6dd] ">
      <p className="text-orange-400 max-sm:text-3xl text-4xl font-semibold mb-2">
        10,300+ <span className="text-black">Learners</span>
      </p>
      <p>have exceeded in their career through our platform</p>

      <div className="py-5 overflow-hidden">
        <motion.div className="flex gap-5" style={{ x: xTranslation }}>
          {/* ✅ First set with ref */}
          <div ref={ref} className="flex gap-5">
            {CrowserData.map((data, i) => (
              <CrowserCard
                img={data.img}
                name={data.name}
                company={data.company}
                key={i}
              />
            ))}
          </div>

          {/* ✅ Duplicate set (no ref) */}
          <div className="flex gap-5">
            {CrowserData.map((data, i) => (
              <CrowserCard
                img={data.img}
                name={data.name}
                company={data.company}
                key={`dup-${i}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Crowser
