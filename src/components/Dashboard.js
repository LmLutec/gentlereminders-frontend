import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Dashboard() {
  const [userRole, setUserRole] = useState("");

  const navigate = useNavigate();
  let user = localStorage.getItem("user");
  //   useEffect(() => {
  //     async function grabUser() {
  //       //   let role = await localStorage.getItem("role");

  //       setUserRole(role);
  //       //   if (role == "admin") {
  //       //     setUserRole("admin");
  //       //   } else {
  //       //     console.log(role);
  //       //     // setUserRole("user");
  //       //   }

  //     }
  //     grabUser();
  //   }, []);

  const newGoal = () => {
    navigate("/creategoal");
  };

  return (
    <div>
      <h2>Dashboard page</h2>

      <button onClick={newGoal}>Create New Goal</button>
    </div>
  );
}
export default Dashboard;
