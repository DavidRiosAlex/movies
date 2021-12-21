import { memo, useState } from "react";
import styles from './MovieCard.module.scss';
import Text from '../Text/Text';

const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500/'

const MovieCard = ({original_title, backdrop_path, poster_path}) => {
    const [mouseOn, setMouseOn] = useState(false);
    return <div className={styles.cardContainer} onMouseEnter={() => setMouseOn(true)} onMouseLeave={() => setMouseOn(false)}>
        <img src={TMDB_IMAGE_BASE_PATH + poster_path} style={{position: 'absolute', width: '200px', zIndex: -1}}/>
        <div className={mouseOn ? styles.cardLayer : styles.none}>
          <div className={styles.cardLayerContent}>
            <Text text={original_title} type="subtitle" />
          </div>
        </div>
    </div>
};

const isEqualComponent = (prevProps, nextProps) => {
    return prevProps.original_title === nextProps.original_title
};

export default memo(MovieCard, isEqualComponent);
