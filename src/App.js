import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import React, { useState } from 'react';
import Planets from './components/Planets';
import People from './components/People';
import Navbar from './components/Navbar';
const queryClient = new QueryClient();


function App() {

  const [page, setPage] = useState('planets');

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <div className="App">
          <h1>Star Wars Info</h1>
          <Navbar setPage={setPage} />
          <div className="content">
            {page === 'planets' ? <Planets /> : <People />}
          </div>
        </div>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
