import { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useSpring, animated } from 'react-spring';
import styles from './Select.module.scss';

export const Select = ({options=[], value, onSelect = () => {}}) => {
  const [isActive, setIsActive] = useState(false);
  const selected = useMemo(() => {
    return options.find(option => option.value === value);
  }, [value]);

  const [_styles, api] = useSpring(() => ({opacity: isActive ? 1 : 0, visibility: isActive ? 'visible' : 'hidden'}));
  useEffect(() => {
    api.start({
      to: [
        { opacity: isActive ? 0 : 1, visibility: isActive ? 'hidden' : 'visible' },
        { opacity: isActive ? 1 : 0, visibility: isActive ? 'visible' : 'hidden' },
      ],
      from: { opacity: isActive ? 1 : 0, visibility: isActive ? 'visible' : 'hidden' }, 
    });
    api.stop();
  }, [isActive]);

  return (
    <div className={styles.select} onClick={() => setIsActive(!isActive)}>
      <div className={styles.select_btn} onClick={() => setIsActive(!isActive)}> 
        {selected?.label ?? 'Choose an option'}
        <span className={`fa ${isActive ? 'fa fa-caret-up' : 'fa-caret-down'}`}></span>
      </div>
      <animated.div style={_styles} className={styles.select_content}>{
        options.map(option => <div key={option.value} onClick={() => onSelect(option.value)} className={styles.select_item}>{option.label}</div>)
      }
      </animated.div>
    </div>
  );
};

Select.propTypes = {
  options: PropTypes.array,
  value: PropTypes.number,
  onSelect: PropTypes.func,
};

