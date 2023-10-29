import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material'

import { NavBar } from './components/NavBar'
import { Routing } from './components/Routeting'

const theme = createTheme()

const App = () =>  (
  <ThemeProvider theme={theme}>
    <Router>
      <NavBar />
      <Routing />
    </Router>
  </ThemeProvider>
);

export default App;
