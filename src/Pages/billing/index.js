import { useState } from "react";
import PricingCard from "./PricingCard";
// import "./Billing.css";

// import styles from "./Billing.css";
// import Input from "../../ui-components/Input";

const Billing = () => {
    const [selectMonthly, setSelectMonthly] = useState(true);
    // console.log(selectMonthly);

    // <div className={styles.PricingApp}>
    //     <div className={styles["app-container"]}>
    //         {/* Header */}
    //         <div>
    //             <h1 className={styles["header-topic"]}>Our Pricing Plan</h1>
    //             <div className={styles["header-row"]}>
    //                 <p>Annually</p>
    //                 {/* <label className={styles["price-switch"]}> */}
    //                 {/* <Input
    //                     type="checkbox"
    //                     onChange={setSelectMonthly((prev) => !prev)}
    //                     inputContainerStyle={styles["price-checkbox"]}
    //                 /> */}
    //                 <input
    //                     className={styles["price-checkbox"]}
    //                     onChange={() => {
    //                         setSelectMonthly((prev) => !prev);
    //                     }}
    //                     type="checkbox"
    //                 />
    //                 <div className={styles["switch-slider"]}></div>
    //                 {/* </label> */}
    //                 <p>Monthly</p>
    //             </div>
    //         </div>
    //         {/* Cards here */}
    //         <div className={styles["pricing-cards"]}>
    //             <PricingCard
    //                 title="Essential"
    //                 price={selectMonthly ? "20.99" : "188.9"}
    //                 storage="60 GB Storage"
    //                 users="5"
    //                 sendUp="5"
    //             />
    //             <PricingCard
    //                 title="Deluxe"
    //                 price={selectMonthly ? "34.99" : "349.9"}
    //                 storage="70 GB Storage"
    //                 users="10"
    //                 sendUp="10"
    //             />
    //             <PricingCard
    //                 title="Premium"
    //                 price={selectMonthly ? "79.99" : "499.9"}
    //                 storage="90 GB Storage"
    //                 users="20"
    //             />
    //         </div>
    //     </div>
    // </div>
    return (
        <div className="PricingApp">
            <div className="app-container">
                {/* Header */}
                <div>
                    <h1 className="header-topic">Our Pricing Plan</h1>
                    <div className="header-row">
                        <span className="header-sub-topic">Annually</span>
                        <label className="price-switch">
                            <input
                                className="price-checkbox"
                                onChange={() => {
                                    setSelectMonthly((prev) => !prev);
                                }}
                                type="checkbox"
                            />
                            <div className="switch-slider"></div>
                        </label>
                        <span className="header-sub-topic">Monthly</span>
                    </div>
                </div>
                {/* Cards here */}
                <div className="pricing-cards">
                    <PricingCard
                        title="Basic Plan"
                        price={selectMonthly ? "$2/month/user" : "$6/user"}
                        storage="Up to 10 graphs"
                        users="Up to 500 chatbot queries"
                        sendUp="Email + live chat support"
                    />
                    <PricingCard
                        title="Pro Plan"
                        price={selectMonthly ? "$8/month/user" : "$15/user"}
                        storage="Up to 50 graphs"
                        users="Up to 1000 chatbot queries"
                        sendUp="10"
                    />
                    <PricingCard
                        title="Enterprise Plan"
                        price={"Contact for price"}
                        storage="Unlimited graphs"
                        users="Ability to upload custom PDFs"
                        sendUp="24/7 phone + email support"
                    />
                </div>
            </div>
        </div>
    );
}

export default Billing;
