import styles from "./header.module.scss";
import refresh from "../../assets/images/refresh.png"
import user from "../../assets/images/user.png"


function Header() {
    return (
        <header className={styles.header}>

            <div className="container">
                <div className={styles["header-body"]}>

                    <div className={styles["header-burger"]}>

                        <div className={styles["burger-line"]}></div>
                        <div className={styles["burger-line"]}></div>
                        <div className={styles["burger-line"]}></div>

                    </div>

                    <div className={styles["btn-block"]}>
                        <div >
                            <button className={styles["header-buttons"]} type={"reset"}>
                                <img className={styles["header-icon"]} src={refresh} alt="refresh"/>
                            </button>
                        </div>

                        <div >
                            <button className={styles["header-buttons"]} type={"button"}>
                                <img className={styles["header-icon"]} src={user} alt="refresh"/>
                            </button>
                        </div>

                    </div>

            </div>
                </div>


        </header>
    );
}

export default Header;
