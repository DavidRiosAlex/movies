import { memo, useEffect, useMemo, useRef } from 'react';
import styles from './HorizontalScroll.module.scss';

const useInfiniteHorizontalScrollRef = (callback, errorWidth) => {
    const scrollRef = useRef(null);
    useEffect(() => {
        const scroll = scrollRef.current;
        if (scroll && typeof callback === 'function') {
            const onScroll = () => {
                if (scroll.scrollLeft + scroll.clientWidth >= scroll.scrollWidth - errorWidth) {
                    callback();
                }
            }
            scroll.addEventListener('scroll', onScroll);
            return () => scroll.removeEventListener('scroll', onScroll);
        }
    }, [scrollRef.current]);
    return scrollRef;
};

const HorizontalScroll = ({data, component: CustomComponent}) => {
    const scrollRef = useInfiniteHorizontalScrollRef(() => {console.log('hola mama')}, 10);
    const moviesList = useMemo(() => {
        if (data) {
            return data.map((movie, index) => <CustomComponent key={index.toString()} {...movie} />)
        }
        return []
    }, [data]);

    return (
        <div className={styles.scrollContainer}>
            <div ref={scrollRef} className={styles.horizontalScroll}>
                {moviesList}
            </div>
        </div>
    )
};

export default memo(HorizontalScroll)