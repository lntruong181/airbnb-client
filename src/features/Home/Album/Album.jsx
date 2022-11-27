import { Grid } from '@mui/material';
import classNames from 'classnames/bind';

import styles from './Album.module.scss';
import AlbumItem from './AlbumItem';

const cx = classNames.bind(styles);

const Album = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} md={2}>
        <AlbumItem />
      </Grid>
    </Grid>
  );
};

export default Album;
