/* *
 * https://www.npmjs.com/package/react-hook-form-mui
 * https://react-hook-form-material-ui.vercel.app/?path=/docs/formcontainer--strict-typing-form
 */
import { Grid } from '@mui/material';

const StrictTypingView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
      <Grid item xs={8}>
        StrictTypingForm
      </Grid>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
    </Grid>
  );
};

export default StrictTypingView;
