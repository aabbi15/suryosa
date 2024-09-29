import { motion } from "framer-motion";

export default function CollapseCard({ title, description, isActive }) {
  return (
    <>
      <div className={`relative rounded-[6px] card ${isActive ? "activecard" : ""}   `}>
        <div className="header w-full rounded-[6px]">
          <div className="img-box">
            
          </div>
          <span className="title font-bold">{title}</span>
        </div>

        {/* Content section */}
        <div className="content mt-4">
          <p>{description}</p>
        </div>

        {/* Progress Bar (at the bottom of the card) */}
        {isActive && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 5 }}
            className="absolute bottom-0 left-0"
          >
            <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-500 h-[3px] w-full" />
          </motion.div>
        )}
      </div>
    </>
  );
}
