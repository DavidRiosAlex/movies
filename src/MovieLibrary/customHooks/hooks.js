import { useEffect, useRef } from 'react';

export const useInfiniteVerticalScrollRef = (callback, errorHeight) => {
    const scrollRef = useRef(null);
    useEffect(() => {
      const scroll = scrollRef.current;
      if (scroll && typeof callback === 'function') {
        const onScroll = () => {
          if (scroll.scrollTop + scroll.clientHeight >= scroll.scrollHeight - errorHeight) {
            callback(scroll.scrollTop + scroll.clientHeight, scroll.scrollHeight - errorHeight);
          }
        }
        scroll.addEventListener('scroll', onScroll);
        return () => scroll.removeEventListener('scroll', onScroll, false);
      }
    }, [scrollRef.current]);
    return scrollRef;
};
