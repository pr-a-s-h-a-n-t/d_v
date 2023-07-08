import React from "react";
import styles from "../../../style/LandingPage.module.scss";
import lp_img_contn from "../../../assets/lp_img_contn.png";
import lp_instagram from "../../../assets/lp_instagram.png";
import lp_1 from "../../../assets/lp_1.png";
import lp_2 from "../../../assets/lp_2.png";
import lp_3 from "../../../assets/lp_3.png";
import lp_4 from "../../../assets/lp_4.png";
import { useNavigate } from "react-router-dom";
const Auth = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.email === "" || input.password === "") {
      return alert("please fill all the fields");
    } else if (input.email === "admin@xyz.com" && input.password === "admin") {
      window.localStorage.setItem("userCred", JSON.stringify(input));
      navigate("/dashboard/home");
      console.log("success");
    }
  };

  //   email:- admin@xyz.com
  //  password:- 'admin'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return (
    <section>
      <div className={styles._container}>
        <div className={styles._left}></div>
        <div className={styles._right}>
          <div className={styles._right__container}>
            <img src={lp_instagram} alt="logo" />
            <form onSubmit={(e) => handleSubmit(e)}>
              <input
                required
                onChange={(e) => {
                  handleInputChange;
                }}
                type="text"
                placeholder="Email"
              />
              <input
                onChange={(e) => {
                  handleInputChange;
                }}
                required
                type="password"
                placeholder="Password"
              />
              <button type="submit">Log in</button>
              {/* <div>
                  <p>
                    Don't have an account?<a href="/signup"> Sign up</a>
                  </p>
                </div> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
