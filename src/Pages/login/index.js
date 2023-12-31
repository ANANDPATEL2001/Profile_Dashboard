import Link from "next/link";
import FullButton from "@aio/components/FullButton";
import Input from "@aio/components/Input";
import Logo from "@aio/components/Logo";
import styles from "./login.module.css";
import { FaArrowLeft } from "react-icons/fa";

const Login = () => {
  return (
    <>
      <Link href={`/`}><button className="home-back-btn"><FaArrowLeft /></button></Link>
      <div className={styles.container}>
        <section className={styles["login-container"]}>
          <div className={styles["brand-container"]}>
            <Logo
              width="200"
              height="200" />
            <div className={styles['logo-explain']}>Profile Dashboard</div>
          </div>

          {/* login form */}
          <div className={styles["form-container"]}>
            <div className="t-center" style={{ margin: "15px 0" }}>
              <div className={styles["sm-brand-container"]}>
                <Logo
                  width="200"
                  height="200" />
              </div>
              <h1>Login</h1>
              <p>Please enter email and password to login</p>
            </div>
            <div>
              <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="text"
                placeholder="Email"
                onChange={(e) => console.log(e)}
                name="email"
                label={"Email"}
              />
              <Input
                inputContainerStyle={{ padding: "15px 30px" }}
                type="password"
                placeholder="Password"
                onChange={(e) => console.log(e)}
                name="email"
                label={"Email"}
              />
              <FullButton label={"Login"} />

              <p className="tc-grey t-center">
                Dont have an account?{" "}
                <Link className="link" href={`/signup`}>Signup for free</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
