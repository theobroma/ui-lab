import { Box, Grid } from '@mui/material';

// import logo from '../@assets/images/rhf-mui.png';
import DropdownShareButton from '../@components/DropdownShareButton/DropdownShareButton';

const MainView = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
      <Grid item xs={8}>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {/* <img src={logo} alt="Logo" /> */}
          {/*  */}
          <DropdownShareButton />
        </Box>
      </Grid>
      <Grid item xs={2}>
        {/* xs=2 */}
      </Grid>
    </Grid>
  );
};

export default MainView;
