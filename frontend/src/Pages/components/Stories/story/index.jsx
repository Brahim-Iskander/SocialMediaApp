import AddBoxIcon from '@mui/icons-material/AddBox';
import './style.css';
export default function Story({type}) {
    return (

        <>
        { type === "new" ? 
           <div style={{ 
            backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/042/818/355/non_2x/8bit-pixel-graphic-blue-sky-background-with-clouds-vector.jpg")',
            display: 'flex',
            backgroundSize: 'cover',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '130px', 
            height: '200px', 
            backgroundColor: 'lightblue', 
            margin: '10px',
            borderRadius: '10px',
            padding: '10px',
            position: 'relative' // important for absolute positioning inside
          }}>

            <AddBoxIcon style={{border:'solid 1px ', borderRadius:'5px', color:"white"}}/>
            <h5 style={{color:"white", marginBottom:'8px'}} >Add story</h5>
          </div>
          :
          <div style={{
            width: '130px',
            height: '200px',
            backgroundImage: 'url("https://images.pexels.com/photos/31950254/pexels-photo-31950254/free-photo-of-scene-de-ceremonie-de-mariage-elegante-en-noir-et-blanc.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', // replace with real story image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '10px',
            margin: '10px',
            position: 'relative',
            overflow: 'hidden',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '14px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '10px'
          }}>
            <div className="story-profile" style={{
              position: 'absolute',
              top: '10px',
              left: '10px',
              width: '35px',
              height: '35px',
              borderRadius: '10px',
              border: '2px solid #fff',
              overflow: 'hidden'
            }}>
              <img 
                src="https://via.placeholder.com/35" // replace with profile image
                alt="profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
            <span style={{ zIndex: 1 }}>Iskander Brahim</span>
          </div>
          
        
    

        }
        
        </>
    );
}