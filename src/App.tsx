import './App.css';
import Header from './Pages/Header';
import Pricing from './Pages/Pricing';
import Footer from './Pages/Footer';
import About from './Pages/About';
import Landing from './Pages/Landing';
import Subscribe from './Pages/Subscribe';
import Documentation from './Pages/Documentation';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Header></Header>
        <Router>
          <Routes>
            <Route path="/" Component={Landing} />
            <Route path="/pricing" Component={Pricing} />
            <Route path="/about" Component={About} />
            <Route path="/documentation" Component={Documentation} />
            <Route path="/subscribe" Component={Subscribe} />
          </Routes>
        </Router>
        <Footer></Footer>

      </ThemeProvider>

    </div>
  );
}
export default App;
