import { Form } from 'react-bootstrap';

export const SelectMerc = ({ mercID, mercsList, onChangeMerc }) => {
  return (
    <Form>
      <Form.Group controlId="selectMercForm">
        <Form.Label>Select Mercenary</Form.Label>
        <Form.Control as="select" custom onChange={onChangeMerc} value={mercID}>
          {mercsList
            .filter((merc) => merc.isAlive)
            .map((merc) => (
              <option key={merc.id} value={merc.id}>
                {merc.nickname}{' '}
              </option>
            ))}
        </Form.Control>
      </Form.Group>
    </Form>
  );
};
