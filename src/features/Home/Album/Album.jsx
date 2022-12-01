import { useState } from 'react';
import { Grid } from '@mui/material';
import classNames from 'classnames/bind';
import { useSelector } from 'react-redux';

import AlbumItem from './AlbumItem';
import GlobalMap from '@/components/GlobalMap';

import styles from './Album.module.scss';

const cx = classNames.bind(styles);

const Album = () => {
  const isShowMap = useSelector((state) => state.home.showMap);

  return (
    <div className={cx('container')}>
      {isShowMap ? (
        <GlobalMap />
      ) : (
        <div className={cx('album')}>
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
          </Grid>
        </div>
      )}
    </div>
  );
};

export default Album;
