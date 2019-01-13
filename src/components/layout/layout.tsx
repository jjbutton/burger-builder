import React from 'react';
import styled from 'styled-components';

const Toolbar = styled.span`
  background-color: yellow;
`;

const SideDrawer = styled.span`
  background-color: rebeccapurple;
  color: wheat;
`;

const Backdrop = styled.span`
  background-color: orchid;
`;

const Main = styled.main`
  margin: 16px;
  background-color: whitesmoke;
`;

interface LayoutProps {
  children: any;
}
const Layout = (props: LayoutProps) => (
  <>
    <Toolbar> Toolbar</Toolbar>
    <SideDrawer> SideDrawer</SideDrawer>
    <Backdrop> Backdrop</Backdrop>
    <Main>{props.children}</Main>
  </>
);

export default Layout;
