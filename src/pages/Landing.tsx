import { motion } from "framer-motion";

type LandingProps = {
  onOpen: () => void;
};

const letters = ["S", "A", "V", "C", "I"];

export default function Landing({ onOpen }: LandingProps) {
  return (
    <motion.div
      drag="y"
      dragConstraints={{ top: -400, bottom: 0 }}
      onDragEnd={(_, info) => {
        if (info.offset.y < -120) {
          onOpen();
        }
      }}
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, rgba(255,91,91,0.16) 0%, #060606 42%, #020202 100%)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        touchAction: "none",
        color: "#f5f5f7",
        padding: 28,
        position: "relative",
        willChange: "transform",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          border: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(255,255,255,0.04)",
          borderRadius: 30,
          padding: "22px 24px",
          marginBottom: 20,
          backdropFilter: "blur(10px)",
        }}
      >
        <div style={{ color: "#ff5b5b", fontSize: 12, fontWeight: 700, letterSpacing: "0.24em" }}>INVESTIGATION SYSTEM</div>
      </motion.div>

      <h1 style={{ display: "flex", gap: "6px", margin: 0 }}>
        {letters.map((letter, index) => (
          <motion.span
            key={letter}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            style={{
              color: "#d40000",
              fontSize: "110px",
              fontWeight: 900,
              fontFamily: 'Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif',
              letterSpacing: "-6px",
              textTransform: "uppercase",
              textShadow: `0 0 4px rgba(255,0,0,.25), 0 0 12px rgba(255,0,0,.20), 0 0 25px rgba(255,0,0,.15)`,
              userSelect: "none",
            }}
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{ color: "#c7c7cc", marginTop: "12px", letterSpacing: "0.26em", textTransform: "uppercase", fontSize: 13 }}
      >
        Justice Never Sleeps.
      </motion.p>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        style={{ position: "absolute", bottom: 34, width: 134, height: 5, borderRadius: 999, background: "rgba(255,255,255,0.95)", boxShadow: "0 0 18px rgba(255,255,255,0.35)", cursor: "grab" }}
      />
    </motion.div>
  );
}