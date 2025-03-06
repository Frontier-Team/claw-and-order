import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { GameContext, INITIAL_POINTS } from './App';
import Header from './Header';

function StartingPot() {
  const { gameState, updateGameState } = useContext(GameContext);
  const [selectedCoverType, setSelectedCoverType] = useState(gameState.coverLevel);
  const navigate = useNavigate();

  const handleClick = (selectedCover) => {
    let pointsForCover = 0;
    switch (selectedCover) {
      case 'bronze':
        pointsForCover = 1000;
        break;
      case 'silver':
        pointsForCover = 2000;
        break;
      case 'gold':
        pointsForCover = 3000;
        break;
      case 'none':
        pointsForCover = 0;
        break;
      default:
        pointsForCover = 0;
        break;
    }

    const coverLevel = (selectedCover === gameState.coverLevel) ? '' : selectedCover;
    const newInitialPoints = coverLevel ? INITIAL_POINTS - pointsForCover : INITIAL_POINTS;

    updateGameState({
      ...gameState,
      initialPoints: newInitialPoints,
      coverLevel,
    });

    setSelectedCoverType(coverLevel);
  };

  return (
    <>
      <Header />
      <Box >
        <Stack alignItems='center'>
          <Item>
            <Typography variant='h5'>Your Starting Pot</Typography>
          </Item>
          <Item>
            <img src='Pawcoin64.png' alt='Paw coin' />
            <Typography variant='h5'>{INITIAL_POINTS} Points</Typography>
          </Item>
          <Item>
            <h2>You can pay for one of the following covers</h2>
          </Item>
          <div className="cards-container">
            <BronzeBox
              onClick={() => handleClick('bronze')}
              isSelectedType={selectedCoverType === 'bronze'}
            >
              <Item><h3>Bronze</h3></Item>
              <Item><img src='bronzeshield64px.png' alt='Bronze shield' /></Item>
              <Item><h3> - 1000 points</h3></Item>
            </BronzeBox>

            <SilverBox
              onClick={() => handleClick('silver')}
              isSelectedType={selectedCoverType === 'silver'}
            >
              <Item><h3>Silver</h3></Item>
              <Item><img src='silvershield64px.png' alt='Silver shield' /></Item>
              <Item><h3>- 2000 points</h3></Item>
            </SilverBox>

            <GoldBox
              onClick={() => handleClick('gold')}
              isSelectedType={selectedCoverType === 'gold'}
            >
              <Item><h3>Gold</h3></Item>
              <Item><img src='goldshield64px.png' alt='Gold shield' /></Item>
              <Item><h3>- 3000 points</h3></Item>
            </GoldBox>

            <NoCoverBox
              onClick={() => handleClick('none')}
              isSelectedType={selectedCoverType === 'none'}
            >
              <Item><h3>No Cover</h3></Item>
              <Item><img src='redXIcon.png' alt='Red X' /></Item>
              <Item><h3>- zero points</h3></Item>
            </NoCoverBox>
          </div>
          <Stack spacing={1} alignItems='center'
            justifyContent='center'
            sx={{ mb: 4 }}
          >
            <Typography align='center' variant='h6'>How to play</Typography>
            <Typography align='center' variant='body1'>
              Tap the lanes or use your arrow keys to move your pet.
              <br />
              <br />
              Collect info coins <img src='infoCoin16px.png' alt='Info Coin' /> to gain 1000 paw points.
              <br />
              <br />
              Avoid the banana peels <img src='banana16px.png' alt='banana peels' />
              to prevent losing 1000 paw points.
              <br />
              <br />
              The game stops when the number of paw points is 15000, or when it drops to 0.
            </Typography>

          </Stack>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            justifyContent='center'
            sx={{ mb: 4 }}
          >
            <Button
              color='primary'
              variant='contained' sx={{ margin: '10px', backgroundColor: 'black', color: 'white', borderRadius: "10px" }}
              onClick={() => navigate('/game')}
            >Go To Game</Button>
          </Stack>
        </Stack>
      </Box>
    </>
  );
}

export default StartingPot;

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.primary,
  boxShadow: 'none',
  border: 'none',
  borderRadius: '0',
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));



const MedalBox = styled(Box)`
  border: 4px solid #ccc;
  border-radius: 8px;
  text-align: center;
  margin: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 30%;
  &:hover {
    cursor: pointer;
    background-color: inherit;
  }
`;

const BronzeBox = styled(MedalBox)`
  background-color: #cd7f32;
  color: white;
  border-color: #a15d2a;
  &:hover {
    background-color: #b87333;
  }
  & > div {
    background-color: ${({ isSelectedType }) => (isSelectedType ? '#cd7f32' : 'white')};
  }
  &:hover > div {
    background-color: ${({ isSelectedType }) => (isSelectedType ? '#b87333' : 'inherit')};
  }
`;

const SilverBox = styled(MedalBox)`
  background-color: #c0c0c0;
  color: black;
  border-color: #8f8f8f;
  &:hover {
    background-color: #a9a9a9;
  }
  & > div {
    background-color: ${({ isSelectedType }) => (isSelectedType ? '#c0c0c0' : 'white')};
  }
  &:hover > div {
    background-color: ${({ isSelectedType }) => (isSelectedType ? '#a9a9a9' : 'inherit')};
  }
`;

const GoldBox = styled(MedalBox)`
  background-color: #ffd700;
  color: black;
  border-color: #e6c200;
  &:hover {
    background-color: #e6c200;
  }
  & > div {
    background-color: ${({ isSelectedType }) => (isSelectedType ? '#ffd700' : 'white')};
  }
  &:hover > div {
    background-color: ${({ isSelectedType }) => (isSelectedType ? '#e6c200' : 'inherit')};
  }
`;

const WarningText = styled(Item)`
  color: red;
`;

const NoCoverBox = styled(MedalBox)`
  background-color: #fff;
  color: red;
  border-color: red;
  &:hover {
    background-color: #f8d7da;
  }
  & > div {
    background-color: ${({ isSelectedType }) => (isSelectedType ? '#fff' : 'white')};
  }
  &:hover > div {
    background-color: ${({ isSelectedType }) => (isSelectedType ? '#f8d7da' : 'inherit')};
  }
`;
