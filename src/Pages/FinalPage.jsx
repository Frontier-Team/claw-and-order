import React from 'react';
import Header from '../Header';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import './FinalPage.css';
import ScratchCard from '../components/ScratchCard';

export const FinalPage = ({ result }) => {
  return (
    <>
      <Header isInitialPage={false} />
      <Box display="flex" justifyContent="center">
        <Box width="100%" maxWidth="1200px">
          <Stack alignItems="center" spacing={2}>
            {result === "win" ? (
              <>
                <Typography variant="h1" sx={{ fontSize: '2rem' }}>Pawesome Job</Typography>
                <Typography variant="body1">Zuko is living his best life knowing he's protected from any curveballs life might throw at him.</Typography>
                <Typography variant="body1">Protect him in real life by taking out cover today.</Typography>
              </>
            ) : (
              <>
                <Typography variant="h1" sx={{ fontSize: '2rem' }}>Ruh-roh</Typography>
                <Typography variant="body1">Zuko is poorly and out of paw coins...</Typography>
                <Typography variant="body1">Buying pet insurance could have protected you and your pet from being in this situation</Typography>
                <Typography variant="body1">Protect him in real life by taking out cover today</Typography>
              </>
            )}
            <Typography variant="h2" sx={{ fontSize: '1rem' }}>Our Pet Insurance</Typography>
            <Typography variant="body1">What are our cover options?</Typography>
            <Stack direction="row" spacing={2} justifyContent="center" className="cards-container">
              <Box className="card">
                <img src='./bronzeshield64px.png' alt="Bronze shield" />
                <Typography variant="body1">Bronze</Typography>
                <Typography variant="body2">Up to £3000 towards vet bills per year</Typography>
              </Box>
              <Box className="card">
                <img src='./silvershield64px.png' alt="Silver shield" />
                <Typography variant="body1">Silver</Typography>
                <Typography variant="body2">£6000 per year</Typography>
              </Box>
              <Box className="card">
                <img src='./goldshield64px.png' alt="Gold shield" />
                <Typography variant="body1">Gold</Typography>
                <Typography variant="body2">£12000 per year</Typography>
              </Box>
            </Stack>
            <ScratchCard />
            <Button variant="contained" color="primary" sx={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: "10px" }}>
              Get your quote today
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
};