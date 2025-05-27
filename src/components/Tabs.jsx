import { Button, ButtonGroup } from 'reactstrap';

const Tabs = ({ tabes, setTabes }) => {
  return (
    <ButtonGroup className="mb-4">
      <Button
        color={tabes === 0 ? 'primary' : 'outline-primary'}
        onClick={() => setTabes(0)}
      >
        Best Foods
      </Button>
      <Button
        color={tabes === 1 ? 'primary' : 'outline-primary'}
        onClick={() => setTabes(1)}
      >
        Burgers
      </Button>
    </ButtonGroup>
  );
};

export default Tabs;
