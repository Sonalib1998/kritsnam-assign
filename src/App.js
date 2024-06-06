import React from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Box from '@mui/material/Box';

import Dashboard from './Components/Dashboard';

function App() {
  return (
    <>
    <Navbar />
      <Box sx={{ display: 'flex', flexGrow: 1 }}>
        <Sidebar />
        <Dashboard/>
       
      </Box>
    </>
  );
}

export default App;
