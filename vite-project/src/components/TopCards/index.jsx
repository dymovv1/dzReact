import styles from "./cards.module.scss";
import rating from "../../assets/images/rating.png";
import newCustomers from "../../assets/images/new_customers.png";
import revenue from "../../assets/images/revenue.png";
import basket from "../../assets/images/basket.png";

const  topCards = [
    {
        title: "Monthly Revenue",
        total: "1 385 $US",
        icon: revenue,
    },

    {
        title: "New Orders",
        total: "12",
        icon: basket,
    },

    {
        title: "Pending Reviews",
        total: "3",
        icon: rating,
    },

    {
        title: "New Customers",
        total: "9",
        icon: newCustomers,
    },
];


function TopCards() {
    return(

            <div className={styles["cards-body"]}>

                    {topCards.map(( item, index) => {
                        return (
                            <div className={styles["cards-item"]} key={index + Math.random()}>
                                <img className={styles["cards-img"]} src={item.icon} alt={item.title}/>
                                <div className={styles["item-text"]}>
                                <p className={styles["cards-title"]}>{item.title}</p>
                                <p className={styles["cards-total"]}>{item.total}</p>
                                </div>
                            </div>
                        )
                        }

                        )}
            </div>

    )

}

export default TopCards;