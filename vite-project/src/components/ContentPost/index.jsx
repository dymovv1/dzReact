import styles from "./contentPost.module.scss";
import reactImg from "../../assets/images/react.jpg";

function ContentPost() {
    return (
        <div className={styles['post']}>
            <div>
                <img className={styles['post-img']} src={reactImg} alt="reactImg" />
            </div>

            <div className={styles['post-text']}>
                <h1 className={styles['post-title']}>Welcome to React-Admin-Demo</h1>
                <p className={styles['post-paragraph']}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem delectus dolores fugiat, iusto magni
                    minima obcaecati quisquam quos tempora, vel voluptate voluptates. Distinctio hic iste molestias, nisi quidem
                    velit.
                </p>
                <div></div>
            </div>
        </div>
    );
}

export default ContentPost;

