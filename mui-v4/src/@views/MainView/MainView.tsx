import React from 'react';

import { Box, Container, Grid, Paper } from '@material-ui/core';

import DropdownShareButton from '../../@components/DropdownShareButton/DropdownShareButton';

const MainView = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ padding: 3 }}>
        <Grid item xs={12}>
          <Box mb={1}>
            <Paper elevation={3}>
              <DropdownShareButton />
            </Paper>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainView;
