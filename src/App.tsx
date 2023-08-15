import './App.css';
import Header from './Header/Header';
import Pricing from './Pricing/Pricing';
import Footer from './Footer/Footer';
import About from './About/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';

const defaultTheme = createTheme({
  palette: {
    primary: {
      light: "#b39ddb",
      main: "#673ab7",
      dark: "#512da8",
      contrastText: "#fff",
    },
    secondary: {
      light: "#448aff",
      main: "#2979ff",
      dark: "#2962ff",
      contrastText: "#000",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Header></Header>
        <Router>
          <Routes>
            <Route path="/" Component={About} />
            <Route path="/pricing" Component={Pricing} />
          </Routes>
        </Router>
        <Footer></Footer>

      </ThemeProvider>

    </div>
  );
}
export default App;
