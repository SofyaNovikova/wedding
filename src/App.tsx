import { Header } from "header/Header";
import "./App.css";
import { ImageLogo } from "image/ImageLogo";
import { Invitation } from "invitation/Invitation";
import { Form } from "form/Form";
import { Palette } from "palette/Palette";
import { Place } from "place/Place";
import { Contact } from "contact/Contact";

function App() {
  return (
    <div className="app">
      <div className="top-container">
        <Header />
        <ImageLogo />
      </div>
      <Invitation />
      <Form />
      <Palette />
      <Place />
      <Contact />
    </div>
  );
}

export default App;
