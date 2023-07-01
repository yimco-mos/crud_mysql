
export const userMap = () => {
  if (state.name === "") {
    const newName = "user" + Math.floor(+Math.random() * 100);
    state.name = newName;
  }
  if (state.password === "" || state.cargo === ""  ) {

    throw error;

  } 
  
 if(state.active){
  if (state.active === 0) {
      state.active = false;
    } else {
      state.active = true;
    }
 }
  else {
    setError("");
  }
};

export const HandleSubmmit = async ({ apiUrl , method,state, route_after_form, }) => {
    const userMap = () => {
      // Lógica para mapear los datos del usuario, si es necesario
    };
  
    userMap();
  
    try {
      const response = await fetch(apiUrl, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state),
      });
  
      if (response.ok) {
        // Registro exitoso
        console.log("exitoso");
        localStorage.setItem("auth", "yes");
        window.location.href = route_after_form; // Redirigir al usuario a la ruta '/home'
  
        // Realizar acciones adicionales, como redireccionar a otra página o mostrar contenido adicional
        setState({
          name: "",
          password: "",
          cargo: "",
          admin: 0,
          active: 0,
        });
      } else {
        // Error en el registro
        console.error("error");
  
        // Mostrar mensaje de error o realizar acciones adicionales
      }
    } catch (error) {
      console.error("Error en la solicitud", error);
      // Realizar acciones en caso de error de conexión o solicitud
    }
  };

  