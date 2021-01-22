import { Toast } from 'react-bootstrap'

export const SetToast = ({text, show, setShow}) => {
    return (
        <Toast style={{ height: "3rem" }} onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}