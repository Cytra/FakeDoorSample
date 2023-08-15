import { Container, Grid, Link, Typography } from "@mui/material";

const footers = [
    {
        title: 'Company',
        description: ['about', 'pricing'],
    },
];

export default function Footer() {

    return (
        <Container
            maxWidth="md"
            component="footer"
            sx={{
                borderTop: (theme) => `1px solid ${theme.palette.divider}`,
                mt: 8,
                py: [3, 6],
            }}
        >
            <Grid container spacing={4} justifyContent="space-evenly">
                {footers.map((footer) => (
                    <Grid item xs={6} sm={3} key={footer.title}>
                        <Typography variant="h6" color="text.primary" gutterBottom>
                            {footer.title}
                        </Typography>
                        <ul>
                            {footer.description.map((item) => (
                                <li key={item}>
                                    <Link href={item} variant="subtitle1" color="text.secondary">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </Grid>
                ))}
            </Grid>
            {/* <Copyright sx={{ mt: 5 }} /> */}
            <h6>Data Digger - All Rights Reserved 2023</h6>
        </Container>
    )
}