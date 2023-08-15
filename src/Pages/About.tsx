import { Box, Button, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const features = [
    'JavaScript rendering',
    'Rotating Proxies',
    'Geotargeting',
    'Screenshots',
];
export default function About() {
    return (
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
            <Typography variant="h4" gutterBottom align="center">
                Features
            </Typography>
            <Grid container spacing={2} alignItems={'center'}>
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
                <Grid item xs={4}>
                    <Grid sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button href="/pricing" variant="contained">Prices and Plans</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}
