// style
import "./App.css";
import { useState } from "react";

// components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import UserList from "./components/userList/UserList";
import NewUserForm from "./components/newuser/NewUserForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);

  //delate user
  const delateUser = (id) => {
    setUsers((prev) => {
      return users.filter((user) => {
        return user.id !== id;
      });
    });
  };

  return (
    <div onClick={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} delateUser={delateUser} />
      </main>
      {showModal && <NewUserForm/>}
      <button onClick={() => setShowModal(true)} className="create-user">Create User</button>
      <Footer />
    </div>
  );
}

export default App;


// {
//   id: 1,
//   image: "https://picsum.photos/400?random=1",
//   firstName: "Hasan",
//   lastName: "Azimov",
//   age: 20,
//   from: "Uzbekistan",
//   job: "Student",
//   gander: "Male",
// }