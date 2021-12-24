import { useEffect, useRef } from 'react';

export const useInfiniteVerticalScrollRef = ({page, callback, errorHeight, condition = true}) => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const scroll = scrollRef.current;
    if (scroll && typeof callback === 'function') {
      const onScroll = () => {
        if (scroll.scrollTop + scroll.clientHeight === scroll.scrollHeight) {
          if (condition) {
            callback();
          }
        }
      };
      scroll.addEventListener('scroll', onScroll);
      return () => scroll.removeEventListener('scroll', onScroll, false);
    }
  }, [scrollRef.current, callback, errorHeight, page]);
  return scrollRef;
};
