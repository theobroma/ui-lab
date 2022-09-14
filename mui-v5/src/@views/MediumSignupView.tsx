/* *
 * https://levelup.gitconnected.com/using-react-hook-form-with-material-ui-components-ba42ace9507a
 * https://github.com/chadmuro/medium-signup/tree/react-hook-form
 */

import { Grid } from '@mui/material';

const MediumSignupView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
      <Grid item xs={8}>
        MediumSignupForm
      </Grid>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
    </Grid>
  );
};

export default MediumSignupView;
