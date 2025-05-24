import { useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import { Container } from 'reactstrap';
import BestFood from './features/bestFood/BestFood';
import Burger from './features/burger/Burger';

const App = () => {
  const [tab, setTab] = useState(0);

  return (
    <Container className="py-5">
      <h2 className="mb-4">🍽️ Food Menu</h2>
      <Tabs tab={tab} setTab={setTab} />
      {tab === 0 && <BestFood />}
      {tab === 1 && <Burger />}
    </Container>
  );
};

export default App;
