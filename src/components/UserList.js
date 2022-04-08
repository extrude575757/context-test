import { useContext } from "react";
import { searchValueContext } from "../context/SearchValueContext";

function UserList() {
  const data = [
    {
      name: "Hans",
    },
    {
      name: "Lisa",
    },
    {
      name: "Pietertje",
    },
  ];

  const { searchValue } = useContext(searchValueContext);

  function renderUsers() {
    let filtered = data;

    if (searchValue.length > 0) {
      filtered = data.filter((user) => {
        return user.name.toLowerCase().includes(searchValue.toLowerCase());
      });
    }

    return filtered.map((user, i) => {
      return <p key={i}>{user.name}</p>;
    });
  }

  return <>{data == 0 ? <p>No users</p> : renderUsers()}</>;
}

export default UserList;
