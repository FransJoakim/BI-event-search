"use server";

const colors = ["#2F4029", "#FEB37F", "#FFEED1", "#DFF0C2", "#7C8E5D"];

const DotsLoader = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "48px",
      }}
    >
      {colors.map((color, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            width: "12px",
            height: "12px",
            margin: "0 4px",
            borderRadius: "50%",
            background: color,
            opacity: 0.7,
            animation: `dots-bounce 1s infinite cubic-bezier(.68,-0.55,.27,1.55)`,
          }}
        />
      ))}
      <style>{`
        @keyframes dots-bounce {
          0%, 80%, 100% { transform: translateY(0); opacity: 0.7; }
          40% { transform: translateY(-12px); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default DotsLoader;
