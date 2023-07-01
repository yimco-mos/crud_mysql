import { useState } from "react";

export const BaseForm = ({
    
  button_acept,
  button_cancel,
  color_acept,
  color_cancel,
  route_cancel,
  state,
  setState,
  handleSubmmit,
  title_form,
}) => {
  const [colorChecked, setColorChecked] = useState(false);
  const [stateActive,setStateActive] = useState(false)
 

  const handleCheckedView = () => {
    setColorChecked(!colorChecked);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
 

  const welcome = () => {};

  return (
    <div>
      <form>

        <h3>{title_form}</h3>
        <div className="mb-3">
          <label className="form-label">nombre</label>
          <input
            type="text"
            className="form-control"
            value={state.name}
            onChange={handleChange}
            name="name"
            placeholder="ingrese un usuario"
          />
          <small id="emailHelpId" className="form-text text-muted">
            escribe bien
          </small>
        </div>
        <div className="mb-3">
          <label className="form-label">cargo</label>
          <input
            type="text"
            className="form-control"
            value={state.cargo}
            onChange={handleChange}
            name="cargo"
            placeholder="ingrese un cargo"
          />
          <small id="emailHelpId" className="form-text text-muted">
            escribe bien
          </small>
        </div>
        <div className="mb-3">
          <label className="form-label">contraseña</label>
          <div className="checkView d-flex">
            <input
              type={colorChecked ? "text" : "password"}
              className="md-3 form-control"
              name="password"
              onChange={handleChange}
              value={state.password}
              placeholder="ingrese una contraseña"
            />

            <div
              style={{
                background: colorChecked && "#fb0a0ab9",
                border: colorChecked ? "1px solid #000" : "1px solid #fb0a0ab9",
              }}
              className="circleCheck"
              onClick={handleCheckedView}
            ></div>
          </div>
          <small id="emailHelpId" className="form-text text-muted">
            Help text
          </small>
        </div>
        <div className="mb-3">
         <div className="form-check">
           <input className="form-check-input" type="checkbox" name="admin" value={state.admin} onChange={handleChange} onClick={()=>setStateActive(!stateActive)}/>
           <label className="form-check-label" htmlFor="admin">
             Admin
           </label>
         </div>
          <small id="emailHelpId" className="form-text text-muted">
            escribe bien
          </small>
        </div> <p>error</p>

        <div className="mb-6 p-4 d-flex">
          <div className="m-6 p-4">
            <a
              href={route_cancel}
              className={`btn  ${color_acept}`}
              onClick={handleSubmmit}
            >
              {button_acept}
            </a>
          </div>
          <div className="m-6 p-4">
            <a onClick={()=>{setStateRoute("")}} className={`btn ${color_cancel}`}>
              {button_cancel}
            </a>
          </div>
          {console.log(state.activestateActive)}
        </div>
      </form>
    </div>
  );
};
