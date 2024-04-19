import { Header } from "header/Header";
import "./App.css";
import { ImageLogo } from "image/ImageLogo";
import { Invitation } from "invitation/Invitation";
import { Form } from "form/Form";

function App() {
  return (
    <div className="app">
      <div className="top-container">
        <Header />
        <ImageLogo />
      </div>
      <Invitation />
      <Form />
    </div>
  );
}

export default App;
