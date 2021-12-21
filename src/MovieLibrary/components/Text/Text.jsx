import { useMemo } from 'react';
import styles from './Text.module.scss';

const Text = ({text, type, transform, ...styles}) => {
    const textSize = useMemo(() => {
        const sizes = {
            title: '30px',
            subtitle: '18px', 
            body: '14px',
            sub: '8px',
        };
        return sizes[type] ? sizes[type] : sizes.body;
    }, [type]);
    
    return (
        <div style={{fontSize: textSize, textTransform: transform, ...styles}} className={styles.text}>{text}</div>
    )
}
export default Text;
