import React from "react";
// import styles from "./PricingCard.css";

const PricingCard = ({ title, price, storage, users, sendUp }) => {
    // <div className={styles["PricingCard"]}>
    //     <div>
    //         <p className={styles["card-title"]}>{title}</p>
    //         <h1 className={styles["card-price"]}>{price}</h1>
    //     </div>
    //     {/* features here */}
    //     <div className={styles["card-features"]}>
    //         <div className={styles["card-storage"]}>{storage}</div>
    //         <div className={styles["card-users-allowed"]}>{users} users in total</div>
    //         <div className={styles["card-send-up"]}>Send up to {sendUp}</div>
    //     </div>
    //     <button className={styles["card-btn"]}>READ MORE</button>
    // </div>
    return (
        <div className="PricingCard">
            <div className="price-header">
                <p className="card-title">{title}</p>
                <h1 className="card-price">{price}</h1>
            </div>
            {/* features here */}
            <div className="card-features">
                <div className="card-storage">{storage}</div>
                <div className="card-users-allowed">{users} users in total</div>
                <div className="card-send-up">Send up to {sendUp}</div>
            </div>
            <button className="card-btn">READ MORE</button>
        </div>
    );
};

export default PricingCard;
