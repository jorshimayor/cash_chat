import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  InputBase,
  Paper,
} from "@mui/material";

interface Message {
  id: number;
  text: string;
}

const ChatBox = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (currentMessage.trim() !== "") {
      const newMessage: Message = {
        id: messages.length + 1,
        text: currentMessage.trim(),
      };
      setMessages([...messages, newMessage]);
      setCurrentMessage("");
    }
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", padding: 2 }}>
      <Box sx={{ marginTop: 2, maxHeight: 300, overflowY: "auto" }}>
        {messages.map((msg) => (
          <Typography
            key={msg.id}
            sx={{ wordBreak: "break-word", marginBottom: 1 }}
          >
            {msg.text}
          </Typography>
        ))}
      </Box>
      <Paper
        component="form"
        sx={{
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: "12px",
          border: "2px solid var(--gray-gray-300, #E2E8F0)",
          background: "var(--White, #FFF)",
          padding: "10px 20px",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Type your transaction"
          inputProps={{ "aria-label": "continue chat" }}
          value={currentMessage}
          onChange={handleMessageChange}
          onKeyPress={(event) => {
            event.preventDefault();
            if (event.key === "Enter") {
              handleSendMessage();
            }
          }}
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M16.1401 2.96004L7.11012 5.96004C1.04012 7.99004 1.04012 11.3 7.11012 13.32L9.79012 14.21L10.6801 16.89C12.7001 22.96 16.0201 22.96 18.0401 16.89L21.0501 7.87004C22.3901 3.82004 20.1901 1.61004 16.1401 2.96004ZM16.4601 8.34004L12.6601 12.16C12.5101 12.31 12.3201 12.38 12.1301 12.38C11.9401 12.38 11.7501 12.31 11.6001 12.16C11.4606 12.0189 11.3824 11.8285 11.3824 11.63C11.3824 11.4316 11.4606 11.2412 11.6001 11.1L15.4001 7.28004C15.6901 6.99004 16.1701 6.99004 16.4601 7.28004C16.7501 7.57004 16.7501 8.05004 16.4601 8.34004Z"
            fill="url(#paint0_linear_1717_3437)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1717_3437"
              x1="2.55762"
              y1="-3.91902"
              x2="21.6075"
              y2="-3.80919"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#01B8BE" />
              <stop offset="1" stop-color="#00BC6C" />
            </linearGradient>
          </defs>
        </svg>
      </Paper>
    </Box>
  );
};

export default ChatBox;
