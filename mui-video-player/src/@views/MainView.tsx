import { Grid } from '@mui/material';

import AppPlayer from '../@components/AppPlayer';

const MainView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <AppPlayer />
      </Grid>
    </Grid>
  );
};

export default MainView;
