import logo from './logo.svg';
import './App.css';
import Footer from './Pages/Footer';
import Navbar from './Component/Navbar';
import { Box } from '@chakra-ui/react';

function App() {
  return (
    <Box className="App">
   
   <Navbar/>
   <Footer/>
    </Box>
  );
}

export default App;
