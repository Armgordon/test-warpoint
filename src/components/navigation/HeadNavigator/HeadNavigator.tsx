import React, { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button, ButtonGroup } from '@mui/material';

const HeadNavigator: FC = () => {
  const [navState, setNavState] = useState('/');
  const navigate = useNavigate();
  function changeRouteHandler(event: React.MouseEvent<HTMLButtonElement>) {
    navigate(event.currentTarget.value);
    setNavState(event.currentTarget.value);
  }
  return (
    <Box>
      <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button value="/" disabled={navState === '/'} onClick={changeRouteHandler}>
          Конвертер
        </Button>
        <Button value="/currlist" disabled={navState === '/currlist'} onClick={changeRouteHandler}>
          Список валют
        </Button>
      </ButtonGroup>
    </Box>
  );
};

export default HeadNavigator;
