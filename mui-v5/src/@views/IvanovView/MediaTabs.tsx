// https://stackoverflow.com/a/61839489/3988363
import { Link, useLocation } from 'react-router-dom';

import { Paper, Tab, Tabs } from '@mui/material';

const MediaTabs = () => {
  const location = useLocation();
  const pathArr = location.pathname.split('/');
  const pathValue = pathArr[pathArr.length - 1];

  return (
    <Paper square>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        value={pathValue}
        //
      >
        <Tab
          label="Signin"
          component={Link}
          to="signin"
          value="signin"
          //
        />
        <Tab
          label="Dependent"
          component={Link}
          to="dependent"
          value="dependent"
          //
        />
        <Tab
          label="Mask"
          component={Link}
          to="mask"
          value="mask"
          //
        />
      </Tabs>
    </Paper>
  );
};

export default MediaTabs;
