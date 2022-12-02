import { Grid } from '@mui/material';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import GlobalMap from '@/components/GlobalMap';
import Card from '../Card';

import styles from './Rooms.module.scss';

const cx = classNames.bind(styles);

const Rooms = () => {
  const isShowMap = useSelector((state) => state.booking.showMap);

  return (
    <div className={cx('container')}>
      {isShowMap ? (
        <GlobalMap />
      ) : (
        <div className={cx('rooms')}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
          >
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
            <Grid item xs={4} sm={4} md={3} lg={2}>
              <Card />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Rooms;
