import { Box, Heading, Text, TextField, Button } from "@radix-ui/themes";
import { useRef } from "react";
import { apiClient } from "../../../shared/services/api-client";
import { useState } from "react";

export const UrlShort = () => {
  const url = useRef();
  const [shortURL, setShortURL] = useState();

  const takeURL = async () => {
    const URL = url.current.value;

    try {
      const response = await apiClient.post("/short-url", {
        bigUrl: URL,
        email: localStorage.email, // <-- REQUIRED
      });

      if (response && response.data.shorturl) {
        setShortURL(response.data.shorturl);
        console.log("Small URL is", response.data.shorturl);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box width="360px" mx="auto" mt="6">
      <Heading align="center" mb="4">
        UrlShortener
      </Heading>

      <Box mb="3">
        <Text as="label" size="2" weight="medium" mb="1" display="block">
          BigUrl
        </Text>
        <TextField.Root ref={url} type="text" placeholder="Type Url Here" />
      </Box>

      <Button
        onClick={takeURL}
        variant="soft"
        size="3"
        style={{ width: "47%", margin: 4 }}
      >
        Short URL
      </Button>
      <a href={shortURL}>{shortURL}</a>
    </Box>
  );
};
