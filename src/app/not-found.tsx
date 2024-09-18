import style from "../styles/notFound.module.css";

export default function NotFound() {
    return (
        <div className={style.notFoundContainer}>
            <h1 className={style.errorCode}>404</h1>
            <h3 className={style.errorMessage}>Oops! Page Not Found!</h3>
            <p className={style.errorDescription}>
                The page you are looking for does not exist or was removed! We suggest you go back home or previous page.
            </p>
            <button className={style.backButton}>
                Go Back
            </button>
        </div>
    );
}
