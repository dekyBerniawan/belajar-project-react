import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBestFoods } from './bestFoodSlice';
import { Card, CardBody, CardImg, CardTitle, Col, Row } from 'reactstrap';
import { renderStars } from '../renderStars';

const BestFood = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.bestFood);

  useEffect(() => {
    if (status === 'idle') dispatch(getBestFoods());
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <Row>
      {data.map((item) => (
        <Col md="4" key={item.id} className="mb-4">
          <Card className="h-100">
            <CardImg top width="100%" src={item.img} alt={item.name} />
            <CardBody>
              <CardTitle tag="h5">{item.name}</CardTitle>
              <p>{item.dsc}</p>
              <p>
                Rating: <span className="star">{renderStars(item.rate)}</span> (
                {item.rate})
              </p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default BestFood;
