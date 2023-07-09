import { Spinner } from 'react-bootstrap';

export default function Loading(){
  return(
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <Spinner animation="border" role="status" />
    </div>
  )
}