import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBestFoods } from './bestFoodSlice';
import { Col, Row } from 'reactstrap';
import CardFood from '../../components/CardFood';

const BestFood = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.bestFood);

  useEffect(() => {
    // console.log('[useEffect] status:', status);
    if (status === 'idle') dispatch(getBestFoods());
    // console.log('[useEffect] Fetching best foods...');
  }, [dispatch, status]);

  // useEffect(() => {
  //   if (status === 'succeeded') {
  //     console.log('[useEffect] Data berhasil diambil:', data);
  //   }
  // }, [status, data]);

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

export default BestFood;
