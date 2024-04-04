import React from 'react';
import ReactPlayer from 'react-player';
import Session1Vid from './Videos/Session 1.mp4';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Session1 = () => {
    const videoSource = Session1Vid; // Assuming Session1Vid is the URL of your video file
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m">
        <Box sx={{ bgcolor: 'lightgray', height: '100%', padding: "3%" }}>
            <h3 style={{paddingLeft: "3%", paddingTop:"3%"}}>Session 1: Introduction to Chomsky Hierarchy</h3>
            <ReactPlayer url={videoSource} controls={true} width='100%' height='auto' style={{paddingLeft:"2%", paddingRight:"2%"}}/> 
            <h4 style={{paddingLeft: "3%"}}>Concepts Covered:</h4>
            <ul>
                <li>What is Chomsky Hierarchy</li>
                <li>Types of Chomsky Hierarchy</li>
            </ul>
        </Box>
      </Container>
    </React.Fragment>
    );
}

export default Session1;


