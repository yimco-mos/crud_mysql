import { Login } from "./assets/login";
import { useState } from "react";
import "./App.css";
function App() {
  const [checkedView, setCheckedView] = useState(false);
  const [colorCheked, setColorChecked] = useState(false);
  const [userValidate, setUserValidate] = useState([]);
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const handleCheckedView = () => {
    setCheckedView(!checkedView);
    setColorChecked(!colorCheked);
  };
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmmit = (e) => {
    e.preventDefault();
    setUserValidate([...userValidate, user]);
    console.log(userValidate);
  };

  return (
    <>
      <div className="p-5">
        <form>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={user.name}
              onChange={handleChange}
              name="name"
              aria-describedby="emailHelpId"
              placeholder="abc@mail.com"
            />
            <small id="emailHelpId" className="form-text text-muted">
              Help text
            </small>
          </div>

          <div className="mb-3 ">
            <label className="form-label">passwoord</label>
            <div className="checkView d-flex ">
              <input
                type={checkedView ? "text" : "password"}
                className="md-3 form-control"
                name="password"
                onChange={handleChange}
                value={user.password}
                aria-describedby="emailHelpId"
                placeholder="abc@mail.com"
              />
              <div
                style={{
                  background: colorCheked && "#fb0a0ab9",

                  border: colorCheked
                    ? "1px solid #000"
                    : "1px solid #fb0a0ab9",
                }}
                className="circleCheck"
                onClick={handleCheckedView}
              ></div>
            </div>
            <small id="emailHelpId" className="form-text text-muted">
              Help text
            </small>
          </div>

          <button className="btn btn-success" onClick={handleSubmmit}>
            Entrar{" "}
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
