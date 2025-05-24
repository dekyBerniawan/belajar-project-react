import { Button, ButtonGroup } from 'reactstrap';

const Tabs = ({ tab, setTab }) => {
  return (
    <ButtonGroup className="mb-4">
      <Button
        color={tab === 0 ? 'primary' : 'outline-primary'}
        onClick={() => setTab(0)}
      >
        Best Foods
      </Button>
      <Button
        color={tab === 1 ? 'primary' : 'outline-primary'}
        onClick={() => setTab(1)}
      >
        Burgers
      </Button>
    </ButtonGroup>
  );
};

export default Tabs;
