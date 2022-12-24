import styled from '@emotion/styled';
import { Container } from '@mui/system';
import MobileNavigation from '../components/Layout/MobileNavigation';
import NavigationBar from '../components/Layout/NavBar';
import HorizontalQuickProductList from '../components/Product/HorizontalQuickProductList';

import DUMMY_JSON from '../dummy/products.json';
import MenuContextProvider from '../store/menuContext';

const StoreLayoutDiv = styled('div')(({ theme }) => ({
  background: '#fff',
  paddingTop: '4rem',
  paddingBottom: '8rem',
  maxHeight: 'auto',
  height: '100%',
  // width: "100%",
}));

export default function StoreLayout({ children }) {
  return (
    <MenuContextProvider>
      <StoreLayoutDiv>
        <NavigationBar />
        <main>
          <Container>
            <>{children}</>
          </Container>
        </main>
        <footer>
          <MobileNavigation />
        </footer>
      </StoreLayoutDiv>
    </MenuContextProvider>
  );
}
