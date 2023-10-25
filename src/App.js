import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div>
      <UserProfile name="Himanshu" age={30} occupation="software enginner" />
      <UserProfile name="Harsh" age={29} occupation="civil engineer" />
    </div>
  );
}

export default App;
