import { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://joyz.ai/lib/chatbot.bundle.js";
    script.setAttribute("eid", "67a1fefa1129c937c519cb05");
    script.setAttribute("chatbotId", "880ad05b-e669-4931-8617-07b338f1ad9b");
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null; // No UI needed, chatbot will appear automatically
};

export default ChatBot;