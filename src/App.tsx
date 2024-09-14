// src/App.js

// import CardFlip from './components/CardFlip';
import FrontPage from './components/FrontPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePage from './components/GamePage';
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <div className='bg-black w-full h-screen'>
          <Routes>

            <Route path='/' element={<FrontPage />} />
            <Route path='/gamePage' element={<GamePage />} />

          </Routes>
        </div>
      </Router>
    </ChakraProvider>



  );
};

export default App;