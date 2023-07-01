
import { BaseForm } from "../baseComponents/baseForm";
import { useState } from "react";

export const FormValidate = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
    cargo: "",
    active: 0,
    admin: 0,
  }); 
  return( 
     <BaseForm
    title_form={" desde el administrador"}
      state={user}
      apiUrl={"http://localhost:9000/users/new_user"}
      method={"post"}
      setState={setUser}
      route_cancel={"/admin/controler_users"}
      button_acept={"crear"}
      button_cancel={"cancelar"}
      color_cancel={"btn-warning"}
      color_acept={"btn-success"}
      route_after_form={"/admin/controler_users"}
    />
  )
};
