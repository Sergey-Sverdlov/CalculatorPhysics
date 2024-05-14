import dataNavBar from "../../data/dataNavbar";
import LinkNavbar from "../Link/LinkNavbar";
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.container}>
                {dataNavBar.map(link => (
                    <LinkNavbar key={link.title} title={link.title} image={link.image} />
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
