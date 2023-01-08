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
          label="Basic"
          component={Link}
          to="basic"
          value="basic"
          //
        />
        <Tab
          label="Yup"
          component={Link}
          to="yup"
          value="yup"
          //
        />
        <Tab
          label="Zod"
          component={Link}
          to="zod"
          value="zod"
          //
        />
      </Tabs>
    </Paper>
  );
};

export default MediaTabs;
