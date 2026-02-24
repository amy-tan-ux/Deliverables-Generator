import logo from "./logo.svg";
import "./App.css";
import UserRequestForm from "./components/UserRequestForm";
import BusinessProposal from "./components/BusinessProposal";

function App() {
  return (
    <div className="App">
      <UserRequestForm />
      <BusinessProposal />
    </div>
  );
}

export default App;
