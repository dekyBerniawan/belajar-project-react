import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBurgers } from '../burger/burgerSlice';
import { Col, Row } from 'reactstrap';
import CardFood from '../../components/CardFood';

const Burger = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.burger);

  useEffect(() => {
    if (status === 'idle') dispatch(getBurgers());
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <Row>
      {data.map((item) => (
        <Col md="3" key={item.id} className="mb-4">
          <CardFood items={item} />
        </Col>
      ))}
    </Row>
  );
};

export default Burger;
