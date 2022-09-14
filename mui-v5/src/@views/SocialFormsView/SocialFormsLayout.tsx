/* *
 * https://github.com/wpcodevo/Blog_MUI_React-hook-form
 * https://codevoweb.com/react-material-ui-and-react-hook-form-html-forms/
 */
import { Outlet } from 'react-router-dom';

import { Container, Grid } from '@mui/material';

const SocialFormsLayout = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} style={{ padding: 3 }}>
        {/* TABS */}
        {/* <Grid item xs={12}>
          <MediaTabs />
        </Grid> */}
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

export default SocialFormsLayout;
