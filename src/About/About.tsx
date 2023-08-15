import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const features = [
    'High-quality materials',
    'Advanced technology integration',
    'Sleek and modern design',
    'Easy setup and usage',
    'Enhanced durability',
];
export default function About() {
    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography variant="h4" gutterBottom align="center">
                Product Features
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                        aria-label="contacts">
                        {features.map((feature, index) => (
                            <ListItem key={index}>
                                <ListItemIcon>
                                    {/* <CheckIcon /> */}
                                    <StarIcon></StarIcon>
                                </ListItemIcon>
                                <ListItemText primary={feature} />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Grid sx={{ display: 'flex' }}>
                        <Button href="/pricing">Prices and Plans</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
