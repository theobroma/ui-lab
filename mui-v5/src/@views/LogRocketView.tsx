/* *
 * https://blog.logrocket.com/using-material-ui-with-react-hook-form/
 * https://github.com/Mohammad-Faisal/react-hook-form-material-ui/tree/master/src
 */

import { Grid } from '@mui/material';

const LogRocketView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
      <Grid item xs={8}>
        LogRocketForm
      </Grid>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
    </Grid>
  );
};

export default LogRocketView;
