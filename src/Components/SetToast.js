import { Toast, Row } from 'react-bootstrap'

export const SetToast = ({text, show, setShow}) => {
    return (
      <div className="SetToast">
      <Row  >
        <Toast style={{ width: "200px", color: "#000"}} onClose={() => setShow(false)} show={show} delay={1000} autohide>
          <Toast.Body>{text}</Toast.Body>
        </Toast>
        </Row>
        </div>
    )
}