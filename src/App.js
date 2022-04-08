import NavBar from "./components/NavBar";
import UserList from "./components/UserList";
import SearchValueProvider from "./context/SearchValueContext";

function App() {
  return (
    <>
      <SearchValueProvider>
        <NavBar />
        <UserList />
      </SearchValueProvider>
    </>
  );
}

export default App;
