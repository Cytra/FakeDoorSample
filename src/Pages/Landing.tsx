import { Button, Container, Grid, Typography } from "@mui/material";

export default function Landing() {
    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>

            <Grid container spacing={2} alignItems={'center'}>
                <Grid item xs={8}>
                    <Typography variant="h3" gutterBottom align="left">
                        Tired of getting blocked while scraping the web?
                    </Typography>
                    <Typography variant="h5" gutterBottom align="left">
                        The DataDigger web scraping API handles headless browsers and rotates proxies for you.
                    </Typography>
                </Grid>

                <Grid item xs={4}>
                    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button href="/pricing" variant="contained">Try for Free</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
