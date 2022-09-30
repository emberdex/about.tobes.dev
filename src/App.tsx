import React from 'react';
import Jumbotron from './components/jumbotron/Jumbotron';
import './FontOverrides'
import {Container, createTheme, ThemeProvider} from '@mui/material';
import './index.css';
import './fonts.css';

const theme = createTheme({
    typography: {
        fontFamily: 'Open Sans',
        jumbotronHeader: {
            fontFamily: 'Open Sans',
            fontSize: '6rem',
            fontWeight: 700
        }
    },
    palette: {

    }
})

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{height: '100vh'}}>
                <Jumbotron></Jumbotron>
            </Container>
        </ThemeProvider>
    );
}

export default App;
