import React, { FC, useEffect, useRef } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Input, InputIcon, InputWrapper, Messages } from "./styles";

const ChannelData: FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage key={n} author="Almeida" content="This is a test" date="Today at 23:57" />
        ))}

        <ChannelMessage
          author="Almeida 2"
          content="This is a test, but coming from a bot."
          date="Today at 23:58"
          isBot
        />

        <ChannelMessage
          author="Almeida 3"
          content={
            <>
              <Mention>@Almeida</Mention> this is mention.
            </>
          }
          date="Today at 23:59"
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Message #general" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
