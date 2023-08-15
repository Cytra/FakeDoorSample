import { Container, Link, Toolbar, Typography, Box, Button} from "@mui/material";
import logo from '../Assets/logo.png';

export default function Header() {
  return (
    <Container
    maxWidth="md"
    component="header"
>
    <Toolbar sx={{ flexWrap: 'wrap' }}>

    <Link href="/">
      <Box
        component="img"
        sx={{ height: 54 }}
        alt="Logo"
        src={logo}
      />
    </Link>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} align="left">
        DataDigger
      </Typography>
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href="/"
          sx={{ my: 1, mx: 1.5 }}
          
        >
          <Button
          variant="outlined"
          >Home</Button>
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="/pricing"
          sx={{ my: 1, mx: 1.5 }}
        >
          <Button
          variant="outlined"
          >Plans and Prices</Button>
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="/about"
          sx={{ my: 1, mx: 1.5 }}
        >
          <Button
          variant="outlined"
          >About</Button>
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="/documentation"
          sx={{ my: 1, mx: 1.5 }}
        >
          <Button
          variant="outlined"
          >Documentation</Button>
        </Link>
      </nav>
    </Toolbar>
    </Container>
  );
}