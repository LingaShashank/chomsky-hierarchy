import React from 'react';
import ReactPlayer from 'react-player';
import Session3Vid from './Videos/Session 3.mp4';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Session3 = () => {
    const videoSource = Session3Vid; // Assuming Session1Vid is the URL of your video file
    return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="m">
        <Box sx={{ bgcolor: 'lightgray', height: '100%', padding: "3%" }}>
            <h3 style={{paddingLeft: "3%", paddingTop:"3%"}}>Session 3: Type 2</h3>
            <ReactPlayer url={videoSource} controls={true} width='100%' height='auto' style={{paddingLeft:"2%", paddingRight:"2%"}}/> 
            <h4 style={{paddingLeft: "3%"}}>Concepts Covered:</h4>
            <ul>
                <li>Type 2 - Context Free Grammar</li>
            </ul>
        </Box>
      </Container>
    </React.Fragment>
    );
}

export default Session3;


