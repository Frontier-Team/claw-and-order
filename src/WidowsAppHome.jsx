import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Typography from '@mui/material/Typography';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GameContext } from './App';
import Header from './Header.jsx';

function WidowsAppHome() {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { gameState, updateGameState } = useContext(GameContext);

    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = (animal) => {
        setOpen(false);

        const chosenAnimal = animal;

        updateGameState({
            ...gameState,
            iconType: chosenAnimal
        });

        navigate('/starting-pot');
    };

    return (
        <>
            <Header isInitialPage={true} />
            <Box display="flex" justifyContent="center">
                <Box width="100%" maxWidth="1200px" padding="10%">
                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        flexDirection="column"
                        textAlign="center"
                    >

                        <Typography variant="body1" style={{ marginTop: '32px', fontWeight: 'bold' }}>
                            Mock app homepage
                        </Typography>


                    </Box>
                </Box>
            </Box>
            <Box display="flex" justifyContent="center" sx={{ marginBottom: '300px' }}>
                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '300px',
                        borderRadius: '5%',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                </Box>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                TransitionComponent={Slide}
                TransitionProps={{ direction: 'up' }}
                fullWidth
                maxWidth="sm"
                sx={{
                    '& .MuiDialog-paper': {
                        position: 'fixed',
                        bottom: '11%',
                        margin: 0,
                        borderRadius: '16px',
                    }
                }}
            >
                <DialogTitle>Are you a cat or dog lover?</DialogTitle>
                <DialogContent>
                    <Typography>
                        Choose your favourite to play our new pet insurance game.
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ justifyContent: 'center', margin: '12px' }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            gap: '40px'  // Adjust this for the space between the images
                        }}
                    >
                        <Box onClick={() => handleClose('cat')} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Button sx={{ minWidth: 0, padding: 0 }}>
                                <img
                                    src="cat.png"
                                    alt="Cat"
                                    style={{ width: '90px', height: '90px', borderRadius: '50%' }}
                                />
                            </Button>
                            <Typography sx={{ fontWeight: 'bold' }}>Cat</Typography>
                        </Box>
                        <Box onClick={() => handleClose('dog')} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <Button sx={{ minWidth: 0, padding: 0 }}>
                                <img
                                    src="dog.png"
                                    alt="Dog"
                                    style={{ width: '90px', height: '90px', borderRadius: '50%' }}
                                />
                            </Button>
                            <Typography sx={{ fontWeight: 'bold' }}>Dog</Typography>
                        </Box>
                    </Box>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default WidowsAppHome;