import styles from "./reviewsList.module.scss";
import userRobot from "../../assets/images/user_robot.png";
import userYoda from "../../assets/images/user_yoda.png";
import user_star from "../../assets/images/user_starwars.png"


const reviewsList = [
    {
        comment: 'it was a beautiful',
        userIcon: user_star,
        stars: '✪',
    },
    {
        comment: 'thanks a lot',
        userIcon: userYoda,
        stars: "✪",
    },
    {
        comment: 'thanks for all',
        userIcon: userRobot,
        stars: "✪",
    },
];


function ReviewsList() {

    return (
        <div className={styles['reviews-body']}>
            {reviewsList.map((item, index) => (
                <div className={styles['reviews']} key={index + Math.random()}>
                    <img className={styles['reviews-img']} src={item.userIcon} alt="user_icon"/>
                    <div>
                        <span>{item.stars}</span>
                        <p className={styles['reviews-text']}>{item.comment}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReviewsList;