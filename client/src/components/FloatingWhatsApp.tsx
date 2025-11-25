import { SiWhatsapp } from "react-icons/si";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">

      {/* Speech Bubble */}
      <div className="relative bg-white px-4 py-2 rounded-xl shadow-lg border border-gray-200 text-sm font-medium text-gray-700">
        Need help? <span className="font-semibold">Chat with us</span>

        {/* Tail of speech bubble */}
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rotate-45 border-r border-t border-gray-200"></div>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/971566537451"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-[#25D366] text-white p-4 rounded-full shadow-xl 
          hover:scale-110 transition-transform duration-300
        "
      >
        <SiWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
}
