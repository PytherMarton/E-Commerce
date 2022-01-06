import { Products, Navbar } from "./components";
import { StyledEngineProvider } from '@mui/material/styles';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <div>
      <Navbar />
      <Products />
    </div>
  );
};

export default App;
