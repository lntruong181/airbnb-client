import { Grid } from '@mui/material';
import classNames from 'classnames/bind';

import styles from './Album.module.scss';
import AlbumItem from './AlbumItem';
import GlobalMap from '@/components/GlobalMap';
const cx = classNames.bind(styles);

const Album = () => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
    >
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      <Grid item xs={4} sm={4} md={3} lg={2}>
        <AlbumItem />
      </Grid>
      {/* <GlobalMap /> */}
    </Grid>
  );
};

export default Album;
