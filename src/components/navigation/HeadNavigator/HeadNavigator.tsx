import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, ButtonGroup } from '@mui/material';

const TopNavigation: FC = () => {
  const navigate = useNavigate();
  function changeRouteHandler(event: React.MouseEvent<HTMLButtonElement>) {
    navigate(event.currentTarget.value);
  }
  return (
    <Box
      style={{
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '40px',
        marginLeft: '40px',
      }}
    >
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button value="/" onClick={changeRouteHandler}>
          Главная
        </Button>
        <Button value="/favorites" onClick={changeRouteHandler}>
          Избранное
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default TopNavigation;
