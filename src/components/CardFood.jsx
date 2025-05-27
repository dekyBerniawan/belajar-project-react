import { Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import { renderStars } from '../features/renderStars';

export default function CardFood({ items }) {
  return (
    <Card className="h-100">
      <CardImg top width="100%" src={items.img} alt={items.name} />
      <CardBody>
        <CardTitle tag="h5">{items.name}</CardTitle>
        <p>{items.dsc}</p>
        <p>
          Rating: <span className="star">{renderStars(items.rate)}</span> (
          {items.rate})
        </p>
      </CardBody>
    </Card>
  );
}
