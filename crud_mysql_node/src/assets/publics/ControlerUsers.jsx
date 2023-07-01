import {Table} from '../componentsadmin/Table'
export const ControlerUsers = () => {
  return (
    <div>
      <div className="mb-4 m-4 p-6">
        <h3>configuraciones de usuarios</h3>
      </div>
      <div className="mb-6 m-4 p-4">
   <a href="/admin/controler_users/new_user"   className="btn btn-success" >
          crear usuario
        </a>
      </div>
      

      <div className="mb-6 m-4 p-2">
      
        <Table />

     
      </div>
    </div>
  );
};
