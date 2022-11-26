import styled from "@emotion/styled";
import { Container } from "@mui/system";
import MobileNavigation from "../components/Layout/MobileNavigation";
import NavigationBar from "../components/Layout/NavBar";

const StoreLayoutDiv = styled("div")(({ theme }) => ({
  background: "#f5f5f5",
  paddingTop: "4rem",
  paddingBottom: "8rem",
  height: "100vh",
}));

export default function StoreLayout({ children }) {
  return (
    <StoreLayoutDiv>
      <NavigationBar />
      <main>
        <Container>{children}</Container>
      </main>
      <footer>
        <MobileNavigation />
      </footer>
    </StoreLayoutDiv>
  );
}
