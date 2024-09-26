import Description from "./components/Description";
import Name from "./components/Name";
import Price from "./components/Price";
import Image from "./components/Image";
import { Button, Card } from "react-bootstrap";

function App() {
  return (
    <Card style={{ width: "18rem" }}>
      <Image />
      <Card.Body>
        <Card.Title>
          <Name />
        </Card.Title>
        <Card.Text>
          <Description />
          <Price />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default App;
