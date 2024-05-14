import * as React from 'react';
import PhysicalCalculator from "./pages/PhysicalCalculator";
import styles from './App.module.scss'

const App: React.FC = () => {
    return <div className={styles.container}>
        <PhysicalCalculator/>
    </div>;
};

export default App;
