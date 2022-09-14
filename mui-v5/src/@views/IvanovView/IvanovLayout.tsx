import { Outlet } from 'react-router-dom';

import { Container, Grid } from '@mui/material';

import MediaTabs from './MediaTabs';

const IvanovLayout = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ padding: 3 }}>
        {/* TABS */}
        <Grid item xs={12}>
          <MediaTabs />
        </Grid>
        {/* CONTENT */}
        <Grid item xs={2}>
          {/* xs=2 */}
        </Grid>
        <Grid item xs={8}>
          <Outlet />
        </Grid>
        <Grid item xs={2}>
          {/* xs=2 */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default IvanovLayout;
