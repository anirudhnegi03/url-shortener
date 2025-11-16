import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { Flex, Box, Heading, Button, Separator, Text } from "@radix-ui/themes";

const linkStyle = (isActive) => ({
  padding: "10px 12px",
  borderRadius: 8,
  display: "block",
  background: isActive ? "var(--color-panel)" : "transparent",
  color: "var(--gray-12)",
  cursor: "pointer",
});

export const DashBoard = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const active = pathname.includes("/dashboard/links") ? "links" : "shorten";
  //   return <h1>Dashboard Welcome {localStorage.email}</h1>;
  return (
    <Flex direction="column" style={{ minHeight: "100dvh" }}>
      {/* Header */}
      <Box asChild>
        <header style={{ padding: "12px 16px" }}>
          <Flex align="center" justify="between">
            <Heading size="5">
              🔗 URL Shortener App, Welcome {localStorage.email}
            </Heading>
            <Button
              variant="soft"
              onClick={() => {
                localStorage.removeItem("email");
                navigate("/login", { replace: true });
              }}
            >
              Logout
            </Button>
          </Flex>
        </header>
      </Box>

      <Separator size="4" />

      {/* Body */}
      <Flex style={{ flex: 1 }}>
        {/* Sidebar */}
        <Box asChild>
          <aside
            style={{
              width: "240px",
              padding: "16px",
              borderRight: "1px solid var(--gray-5)",
            }}
          >
            <Flex direction="column" gap="2">
              <Text size="2" color="gray">
                Menu
              </Text>
              <div
                style={linkStyle(active === "shorten")}
                onClick={() => navigate("/dashboard/shorten")}
              >
                Generate Short URL
              </div>
              <div
                style={linkStyle(active === "links")}
                onClick={() => navigate("/dashboard/links")}
              >
                My URLs
              </div>
            </Flex>
          </aside>
        </Box>

        {/* Vertical line */}
        <Separator orientation="vertical" size="4" style={{ height: "100%" }} />

        {/* Main content: child pages render here */}
        <Box asChild>
          <main style={{ flex: 1, padding: 16 }}>
            <Outlet />
          </main>
        </Box>
      </Flex>
    </Flex>
  );
};
