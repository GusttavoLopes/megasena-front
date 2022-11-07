import React from 'react';
import PagePrincipal from './pages';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PagePrincipal />
    </QueryClientProvider>

  );
}

export default App;
