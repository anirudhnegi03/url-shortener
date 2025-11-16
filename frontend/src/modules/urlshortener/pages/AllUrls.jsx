import { useEffect, useState } from "react";
import { Box, Text, Card, Button, Flex } from "@radix-ui/themes";

export const AllUrls = () => {
  const [urls, setUrls] = useState([]);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const fetchUrls = async () => {
    try {
      const res = await fetch(`${BASE_URL}all-urls`, {
        headers: {
          email: localStorage.email,
        },
      });

      const data = await res.json();
      setUrls(data.urls || []);
    } catch (err) {
      console.log("Error fetching URLs:", err);
    }
  };

  const copyToClipboard = (url) => {
    navigator.clipboard.writeText(url);
  };

  useEffect(() => {
    fetchUrls();
  }, []);

  return (
    <Box>
      <Text as="h2" size="5" weight="bold" mb="4">
        My Shortened URLs
      </Text>

      <Flex direction="column" gap="4">
        {urls.length === 0 && (
          <Text color="gray" size="3">
            No URLs generated yet.
          </Text>
        )}

        {urls.map((url) => (
          <Card
            key={url._id}
            size="3"
            style={{ padding: "18px", borderRadius: "10px" }}
          >
            <Flex justify="between" align="center">
              <Box>
                {/* Display short URL */}
                <Text size="3" weight="bold">
                  {`${BASE_URL}small/${url.shortid}`}
                </Text>

                {/* Display original URL */}
                <Text size="2" color="gray" style={{ display: "block" }}>
                  {url.bigurl}
                </Text>
              </Box>

              <Button
                onClick={() =>
                  copyToClipboard(`${BASE_URL}small/${url.shortid}`)
                }
              >
                Copy
              </Button>
            </Flex>
          </Card>
        ))}
      </Flex>
    </Box>
  );
};
