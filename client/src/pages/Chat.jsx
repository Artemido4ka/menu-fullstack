import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import { devices } from "../devices";

import styled from "styled-components";

const socket = io("http://localhost:5000/");

const ChatContainer = styled.div`
  max-width: 700px;
  margin: 50px auto;
  border: 1px solid teal;
  border-radius: 5px;
`;

const ChatPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
`;

const ChatDisplay = styled.div`
  overflow-y: scroll;
`;
const ChatBottom = styled.div`
  background: teal;
  padding: 20px;
  display: flex;
  border-radius: 5px;
`;

const ChatInput = styled.input`
  min-height: 30px;
  flex: 12;
  border-bottom: 1px solid teal;
`;

const ChatButton = styled.button`
  flex: 1;
`;

const Message = styled.div`
  margin: 20px;
  background: rgba(24, 144, 150, 0.2);
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  min-height: 30px;
  display: flex;
  padding: 5px;
  max-width: 40%;
  margin-left: ${(props) => (props.isMine ? "60%" : "none")};
`;

const MessageAuthor = styled.div`
  color: teal;
  font-weight: 600;
`;

const MessageText = styled.div`
  font-size: 18px;
`;

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [typingDisplay, setTypingDisplay] = useState("");

  const scrollPoint = useRef(null);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    scrollPoint.current.scrollIntoView({ behavior: "smooth" });
  }, [scrollPoint.current]);

  useEffect(() => {
    socket.emit("findAllMessages", {}, (response) => {
      setMessages(response);
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("typing", ({ name, isTyping }) => {
      if (isTyping) {
        setTypingDisplay(`${name} is typing...`);
      } else {
        setTypingDisplay("");
      }
    });
  }, []);

  const sendMessage = () => {
    socket.emit("createMessage", { messageText, userId: user.id }, () => {
      setMessageText("");
      scrollPoint.current.scrollIntoView({ behavior: "smooth" });
    });
  };

  const emitTyping = () => {
    socket.emit("typing", { isTyping: true, user });
    setTimeout(() => {
      socket.emit("typing", { isTyping: false, user });
    }, 2000);
  };

  const handleInput = (inputText) => {
    setMessageText(inputText);
    emitTyping();
  };

  return (
    <>
      <Navbar />
      <ChatContainer>
        <ChatPanel>
          <ChatDisplay>
            {messages.map((element) => (
              <Message
                key={element.id}
                isMine={element.userId === user.id ? true : false}
              >
                <MessageAuthor>{element.name}</MessageAuthor>
                <MessageText>{element.text} </MessageText>
              </Message>
            ))}
            {typingDisplay && <div>{typingDisplay}</div>}
            <div ref={scrollPoint}> </div>
          </ChatDisplay>

          <ChatBottom>
            <ChatInput
              type="text"
              value={messageText}
              onChange={(event) => handleInput(event.target.value)}
            />

            <ChatButton onClick={() => sendMessage()}>Send</ChatButton>
          </ChatBottom>
        </ChatPanel>
      </ChatContainer>
    </>
  );
};

export default Chat;
