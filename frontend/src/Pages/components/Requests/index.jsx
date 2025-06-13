import './style.css';
import Request from './request';
export default function Requests() {
  return (
    <>
    <div className="requests">
      <div className="requests-header">
        <h4>Requests</h4>
        <h4 className='reqnum'>5</h4>
      </div>
      <div>
        <Request />
        <Request />
        <Request />
        

      </div>

    </div>
    </>
    
  )
}
