import { InfinitySpin } from "react-loader-spinner";

import styles from "./Spinner.module.css";

const Spinner = () => {
    return (
        <div className={ styles.spinner } >
            <InfinitySpin
                width='200'
                color="#4fa9ff"
            />
        </div>
    );
};

export default Spinner;