import "./App.css";
import Title from "./Title.jsx";
import MsgBox from "./MsgBox.jsx";
import ProductTab from "./ProductTab.jsx"

function App() {
  return (
    <>
      <MsgBox userName="Shivansh" txtColor="yellow" />
      <ProductTab />
    </>
  );
}

export default App
