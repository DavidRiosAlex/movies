import { memo, useState } from "react";
import styles from './MovieCard.module.scss';
import Text from '../Text/Text';

const TMDB_IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/w500/'

const MovieCard = ({original_title, backdrop_path, poster_path}) => {
    const [mouseOn, setMouseOn] = useState(false);
    return <section className={styles.cardContainer}>
        <img src={TMDB_IMAGE_BASE_PATH + poster_path} className={styles.moviePoster} />
    </section>
};

const isEqualComponent = (prevProps, nextProps) => {
    return prevProps.original_title === nextProps.original_title
};

export default memo(MovieCard, isEqualComponent);
