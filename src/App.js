import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Header,
  Footer,
  Home,
  Sobre,
  Contato,
  Login,
  Cadastro,
  UserPage,
} from "./pages/index";

const AppWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.main`
  flex: 1;
`;

// function App() {
//   return (
//     <AppWrapper>
//       <Header />
//       <MainContent>
//         <Home />
//         <Sobre />
//         <Contato />
//       </MainContent>
//       <Footer />
//     </AppWrapper>
//   );
// }

function App() {
  return (
    <Router>
      <AppWrapper>
        <Header />
        <MainContent>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Sobre />} />
            <Route path="/" element={<Contato />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/user-page" element={<UserPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
