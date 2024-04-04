import React from 'react';
import ReactPlayer from 'react-player';
import Session4Vid from './Videos/Session 4.mp4';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Session4 = () => {
    const videoSource = Session4Vid; // Assuming Session1Vid is the URL of your video file
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="m">
                <Box sx={{ bgcolor: 'lightgray', height: '100%', padding: "3%" }}>
                    <h3 style={{ paddingLeft: "3%", paddingTop: "3%" }}>Session 4: Type 3 and Conclusion</h3>
                    <ReactPlayer url={videoSource} controls={true} width='100%' height='auto' style={{ paddingLeft: "2%", paddingRight: "2%" }} />
                    <h4 style={{ paddingLeft: "3%" }}>Concepts Covered:</h4>
                    <ul>
                        <li>Type 3 - Regular Grammar</li>
                        <li>Conclusion of Chomsky Hierarchy</li>
                    </ul>
                </Box>
            </Container>
        </React.Fragment>
    );
}

export default Session4;
