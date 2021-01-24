import { Toast, Row } from 'react-bootstrap'

export const SetToast = ({text, show, setShow}) => {
    return (
      <div className="SetToast" data-testid="toast">
      <Row  >
        <Toast style={{ width: "200px", color: "#000"}} onClose={() => setShow(false)} show={show} delay={1500} autohide>
          <Toast.Body>{text}</Toast.Body>
        </Toast>
        </Row>
        </div>
    )
}