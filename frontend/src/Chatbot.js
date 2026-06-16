// Chatbot.js

import {
  useState
} from "react";

import "./Chatbot.css";

function Chatbot({
  products = []
}) {

  const [open, setOpen] =
    useState(false);

  const [messages, setMessages] =
    useState([

      {
        sender: "bot",

        text:
          "Hi 👋 Ask me about products, prices, offers or categories."
      }
    ]);

  const [input, setInput] =
    useState("");

  /* Send Message */

  const sendMessage = () => {

    if (!input.trim()) {
      return;
    }

    const userMessage = {
      sender: "user",
      text: input
    };

    let botReply =
      "Sorry, I couldn't understand.";

    const lowerInput =
      input.toLowerCase();

    /* Search Products */

    const matchedProducts =
      products.filter(
        (p) =>

          p.name
            .toLowerCase()
            .includes(lowerInput)

          ||

          p.category
            ?.toLowerCase()
            .includes(lowerInput)
      );

    if (
      lowerInput.includes("offer")
    ) {

      botReply =
        "🔥 Today's best offers are available on Clothing and Electronics.";

    } else if (
      lowerInput.includes("cheap")
    ) {

      const cheapProducts =
        products.filter(
          (p) => p.price < 1000
        );

      botReply =
        cheapProducts.length > 0

          ? `Budget products: ${cheapProducts
              .map((p) => p.name)
              .join(", ")}`

          : "No cheap products found.";

    } else if (
      matchedProducts.length > 0
    ) {

      botReply =
        `Found products: ${matchedProducts
          .slice(0, 3)
          .map((p) => p.name)
          .join(", ")}`;

    } else if (
      lowerInput.includes("hello")
      ||
      lowerInput.includes("hi")
    ) {

      botReply =
        "Hello 👋 Welcome to Shopping.ly";

    } else if (
      lowerInput.includes("electronics")
    ) {

      botReply =
        "We have amazing electronics with discounts 🔥";

    }

    const botMessage = {
      sender: "bot",
      text: botReply
    };

    setMessages([
      ...messages,
      userMessage,
      botMessage
    ]);

    setInput("");
  };

  return (

    <>

      {/* Floating Button */}

      <div
        className="chatbot-button"

        onClick={() =>
          setOpen(!open)
        }
      >

        💬

      </div>

      {/* Chat Window */}

      {
        open && (

          <div className="chatbot-container">

            <div className="chatbot-header">

              AI Shopping Assistant

            </div>

            <div className="chatbot-messages">

              {messages.map(
                (
                  msg,
                  index
                ) => (

                  <div
                    key={index}

                    className={
                      msg.sender ===
                      "user"

                        ? "user-message"

                        : "bot-message"
                    }
                  >

                    {msg.text}

                  </div>
                )
              )}

            </div>

            <div className="chatbot-input">

              <input
                type="text"

                placeholder="Ask something..."

                value={input}

                onChange={(e) =>
                  setInput(
                    e.target.value
                  )
                }
              />

              <button
                onClick={sendMessage}
              >

                Send

              </button>

            </div>

          </div>
        )
      }

    </>
  );
}

export default Chatbot;