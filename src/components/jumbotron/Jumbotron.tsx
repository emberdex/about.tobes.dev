import {Card, CardHeader, CardMedia, Grid, Stack, Typography} from "@mui/material";
import profilePicture from './../../images/profile.jpg';

function Jumbotron() {
    return (
        <Grid container spacing={1} sx={{height: '100vh'}}>
            <Grid xs={12} sm={8} display='flex' alignItems='center'>
                <Stack spacing={2}>
                    <Typography variant='jumbotronHeader'>
                        Hi, I'm Toby.
                    </Typography>
                    <Typography>
                        This page serves as a useful guide to anybody working with me in a professional capacity - it
                        details my typical schedule, my ways of working, and how I work best.
                    </Typography>
                    <Typography>
                        This was inspired by Manual of Me, and Jamie Tanna's derivation of that idea in particular.
                    </Typography>
                </Stack>
            </Grid>

            <Grid xs={12} sm={4} display='flex' alignItems='center'>
                <Grid xs={1} sm={0}/>
                <Grid xs={10} sm={12}>
                    <Card>
                        <CardMedia
                            component='img'
                            image={profilePicture}
                            alt='Profile picture.'
                        />
                        <CardHeader
                            title='Toby Jones'
                            subheader='(he/him)'
                        />
                    </Card>
                </Grid>
                <Grid xs={1} sm={0}/>
            </Grid>
        </Grid>
    );
}

export default Jumbotron;