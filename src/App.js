import Card from "./Card.js";
import "./App.js";
import "./Card.css";

function App(props) {
  return (
    <div className="wrapper ">
      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR28TGM6XnBi2AWDFuCGx47Lzl69-MX06SFLPniDSi4DCyTMWcYt62S80JfF8Q9oW4QNfg&usqp=CAU"
        title="AZULA"
        description="azula dfbdkfnkfbdkfnbk"
      />
      <Card
        img="https://artnmoreizmir.com/wp-content/uploads/2016/11/portre.jpg"
        title="AMON"
        description="SDGERÇNDKFBNDKBDF"
      />

      <Card
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQzXvrW_RIJ99jg-QjuwhFby8cJChGxu_gg&s"
        title="ZAHEER"
        description="sesgsdgsdgsdgsdgs"
      />
    </div>
  );
}

export default App;
