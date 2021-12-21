import { memo, useEffect, useMemo, useRef } from 'react';
import styles from './HorizontalScroll.module.scss';

const HorizontalScroll = ({data, component: CustomComponent}) => {
    const scrollRef = useRef(null);
    const moviesList = useMemo(() => {
        if (data) {
            return data.map((movie, index) => <CustomComponent key={index.toString()} {...movie} />)
        }
        return []
    }, [data]);

    useEffect(() => {
        const scroll = scrollRef.current;
        if (scroll) {
            const onWheel = (event) => {
                if (event.deltaY == 0) return;
                event.preventDefault();
                const scrollToLeft = 200;
                const scrollToRigth = -200;
                const isScrollToDown = event.deltaY > 0;
                scroll.scrollTo({
                    left: scroll.scrollLeft + (isScrollToDown ? scrollToLeft : scrollToRigth),
                    behavior: 'smooth',
                });
            };
            scroll.addEventListener('wheel', onWheel);
            return () => scroll.removeEventListener('wheel', onWheel)
        }
    }, [scrollRef]);

    return <div ref={scrollRef} className={styles.scrollContainer}>
        <div className={styles.horizontalScroll}>
            {moviesList}
        </div>
    </div>
};

export default memo(HorizontalScroll)