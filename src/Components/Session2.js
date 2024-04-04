import React from 'react';
import ReactPlayer from 'react-player';
import Session2Vid from './Videos/Session 2.mp4';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Session2 = () => {
    const videoSource = Session2Vid; // Assuming Session1Vid is the URL of your video file
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m">
        <Box sx={{ bgcolor: 'lightgray', height: '100%', padding: "3%" }}>
            <h3 style={{paddingLeft: "3%", paddingTop:"3%"}}>Session 2: Type 0 and Type 1</h3>
            <ReactPlayer url={videoSource} controls={true} width='100%' height='auto' style={{paddingLeft:"2%", paddingRight:"2%"}}/> 
            <h4 style={{paddingLeft: "3%"}}>Concepts Covered:</h4>
            <ul>
                <li>Type 0 - Unrestricted Grammar</li>
                <li>Type 1 - Context Sensitive Grammar</li>
            </ul>
        </Box>
      </Container>
    </React.Fragment>
    );
}

export default Session2;


