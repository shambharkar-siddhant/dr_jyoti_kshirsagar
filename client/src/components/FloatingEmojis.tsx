export default function FloatingEmojis() {
  const emojis = [
    { emoji: "✨", top: "10%", left: "5%" },
    { emoji: "💖", top: "25%", right: "8%" },
    { emoji: "🌸", top: "50%", left: "3%" },
    { emoji: "💫", top: "70%", right: "5%" },
    { emoji: "🦷", top: "40%", left: "10%" },
    { emoji: "😊", top: "60%", right: "12%" },
    { emoji: "✨", top: "85%", left: "7%" },
    { emoji: "🌟", top: "15%", right: "15%" },
  ];

  return (
    <>
      {emojis.map((item, index) => (
        <div
          key={index}
          className="floating-emoji hidden lg:block"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
        >
          {item.emoji}
        </div>
      ))}
    </>
  );
}
