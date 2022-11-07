import React from 'react';
import Header from '../components/Header';
import Results from '../components/Results';
import Search from '../components/Search';
import { MegaSenaProvider } from '../request';

// import { Container } from './styles';

const PagePrincipal: React.FC = () => {
  return (
    <MegaSenaProvider>
      <Header />
      <Search />
      <Results />
    </MegaSenaProvider>
  );
}

export default PagePrincipal;