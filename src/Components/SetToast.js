import { Toast } from 'react-bootstrap'

export const SetToast = ({text, show, setShow}) => {
    return (
        <Toast style={{ height: "3rem", width: "100rem" }} onClose={() => setShow(false)} show={show} delay={1000} autohide>
          <Toast.Body>{text}</Toast.Body>
        </Toast>
    )
}