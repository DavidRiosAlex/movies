import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './MovieDetail.module.scss';
import { TMDB_IMAGE_BASE_PATH } from '../MovieCard/MovieCard';

export const MovieDetail = ({poster_path, ...details}) => {
  return (<div className={styles} onClick={(e) => e.stopPropagation()}>
    <Card sx={{ flex: 0.5, height: '70%', width: 700}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="300"
        image={TMDB_IMAGE_BASE_PATH + poster_path}
      />
      <CardContent sx={{backgroundColor: 'hsl(0, 0%, 8%)'}}>
        <Typography  color="common.white" gutterBottom variant="h5" component="div">
          {details.original_title}
        </Typography>
        <Typography color="common.white" gutterBottom variant="body2" component="div">
          {details.overview}
        </Typography>
      </CardContent>
      <CardContent sx={{backgroundColor: 'hsl(0, 0%, 8%)'}}>
        <div style={{display: 'flex', justifyContent:'space-between', flex:1, flexDirection: 'row'}}>
          <Typography  color="common.white" gutterBottom variant="h5" component="div">
            {details.adult ? '' : '+18'}
          </Typography>
          <Typography  color="common.white" gutterBottom variant="body2" component="div">
          average vote: {details.vote_average}
          </Typography>
          <Typography  color="common.white" gutterBottom variant="body2" component="div">
          total votes: {details.vote_count}
          </Typography>
        </div>
      </CardContent>
    </Card>
  </div>);
};

MovieDetail.propTypes = {
  backdrop_path: PropTypes.string,
  poster_path: PropTypes.string,
};