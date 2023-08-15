import { Button, Container, Link, Toolbar, Typography } from "@mui/material";

export default function Header() {
  return (
    <Container
    maxWidth="md"
    component="header"
>
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }} align="left">
        Data Digger
      </Typography>
      <nav>
        <Link
          variant="button"
          color="text.primary"
          href="/"
          sx={{ my: 1, mx: 1.5 }}
        >
          Home
        </Link>
        <Link
          variant="button"
          color="text.primary"
          href="/pricing"
          sx={{ my: 1, mx: 1.5 }}
        >
          Plans and Prices
        </Link>
      </nav>
    </Toolbar>
    </Container>
  );
}