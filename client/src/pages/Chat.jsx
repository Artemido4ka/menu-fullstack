import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Slider from "../components/Slider";

import { io } from "socket.io-client";
import { useSelector } from "react-redux";
import { devices } from "../devices";

import styled from "styled-components";

const socket = io("http://localhost:5000/");

const ChatContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  border: 1px solid teal;
  border-radius: 5px;
`;

const ChatPanel = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
`;

const ChatDisplay = styled.div`
  overflow: scroll;
`;

const ChatBottom = styled.div`
  background: teal;
  padding: 20px;
  display: flex;
  bottom: 0;
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
  const [joined, setJoined] = useState(false);
  //   const [name, setName] = useState("");
  const [typingDisplay, setTypingDisplay] = useState("");

  const dummy = useRef(null);

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    socket.emit("findAllMessages", {}, (response) => {
      setMessages(response);
    });

    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("typing", ({ name, isTyping }) => {
      console.log(name, isTyping);
      if (isTyping) {
        setTypingDisplay(`${name} is typing...`);
      } else {
        setTypingDisplay("");
      }
    });
  }, []);

  //для отчистки инпута
  const sendMessage = () => {
    socket.emit("createMessage", { text: messageText }, () => {
      setMessageText("");
      dummy.current.scrollIntoView({ behavior: "smooth" });
    });
  };

  const join = () => {
    //отправляем имя
    console.log(user);
    socket.emit("join", { name: user.firstName }, () => setJoined(true));
  };

  let timeout;
  const emitTyping = () => {
    socket.emit("typing", { isTyping: true });
    timeout = setTimeout(() => {
      socket.emit("typing", { isTyping: false });
    }, 2000);
  };

  const handleSend = () => {
    join();
  };

  const handleInput = (inputText) => {
    setMessageText(inputText);
    emitTyping();
  };

  return (
    <>
      <Navbar />
      {/* {joined ? ( */}
      <button onClick={() => handleSend()}>Start chat</button>
      <ChatContainer>
        <ChatPanel>
          <ChatDisplay>
            {messages.map((element) => (
              <Message>
                <MessageAuthor>{element.name} </MessageAuthor>
                <MessageText>{element.text} </MessageText>

                {/* {typingDisplay && <div>{typingDisplay}</div>} */}
              </Message>
            ))}
            <div ref={dummy}> </div>
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
      {/* ) : (
        <div>
          {/* <form action=""> */}
      {/* <label>What is your name ?</label> */}
      {/* <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          /> */}
      {/*  */}
      {/* </form> */}
      {/* </div>  */}
    </>
  );
};

export default Chat;
