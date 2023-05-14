import styles from "./main.module.scss";
import dashboard from "../../assets/images/dashboard.png";
import sales from "../../assets/images/sales.png";
import catalog from "../../assets/images/catalog.png";
import customers from "../../assets/images/customers.png"
import reviews from "../../assets/images/reviews.png"
import TopCards from "../TopCards/index.jsx";
import ContentPost from "../ContentPost/index.jsx";
import ReviewsList from "../ReviewsList/index.jsx";
import CustomersList from "../CustomersList/index.jsx";

const leftMenu = [
    {
        title: 'Dashboard',
        img: dashboard,
    },
    {
        title: 'Sales',
        img: sales,
    },
    {
        title: 'Catalog',
        img: catalog,
    },
    {
        title: 'Customers',
        img: customers,
    },
    {
        title: 'Reviews',
        img: reviews,
    },
];

function Main() {
    return (
        <main className={styles.main}>
            <div className="container">
                <div className={styles.main_body}>
                    <div className={styles["main-dashboard"]}>
                        <nav className={styles["dashboard-nav"]}>
                            {leftMenu.map((item, index) => (
                                <li className={styles["dashboard-item"]} key={index + Math.random()}>
                                    <img className={styles["dashboard-icon"]} src={item.img} alt={item.title} />
                                    {item.title}
                                </li>
                            ))}
                        </nav>
                    </div>

                    <div className={styles['main-body__components']}>
                        <TopCards />
                        <div>
                            <ContentPost/>
                        </div>


                        <div className={styles['reviews-container']}>
                            <div>
                            <ReviewsList/>
                            </div>

                        </div>

                        <div>
                            <CustomersList/>

                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;
