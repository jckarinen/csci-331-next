"use client";
import { useState } from "react";
import styles from './Counter.module.css';


const Counter = ({ increment = 1 , bg = 'black'}) => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        const newCount = count + increment;
        setCount(newCount);
        if (newCount > 10) {
            resetCounter();
        }
    };

    const resetCounter = () => {
        setCount(0);
    };

    return (
        // JSX
        <div className={styles.counter}
             >
            <div className={styles.title}>Counter</div>
            <button onClick={incrementCounter}
                    className={styles.button}
                    style={{background: bg}}>
                {count}
            </button>
            <button onClick={resetCounter}
                    className={styles.button}
                    style={{background: bg}}>
                Reset
            </button>
        </div>
    );
};

export default Counter;