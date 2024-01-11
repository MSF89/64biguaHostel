import { Link } from "react-router-dom"
import '../Styles/TerminalService.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import { BusService } from "./ExtraComponents/TerminalService";

function TerminalService(){
    return(
        <>
        <div className="contenedor-infotour">
            <div className='contenedor-info'>
                {<h2 className='contenedor-nombre-infoTour'>Bus Terminal Service</h2>}
                <div className='descripcion'>
                    <div className='descripcion-inc'>
                        <h2>Queres ir a...?</h2>
                        <h2>Do you want to go to...?</h2>
                    </div>
                    
                    {BusService.map((id)=> (
                        <h2 className="bus-list contenedor-nombre-infoTour" key={id}><DirectionsBusIcon/>{id}</h2>
                    )
                    )}
                    <div className='descripcion-inc marTop'>
                        <h2>Reserva tu pasaje</h2>
                        <h2>Book your bus ticket</h2>
                    </div>
                </div>
            </div>
        <Link to="https://walink.co/eed673" className='contactoBus' target='blank'>
            <h5>Contactanos por los servicios</h5><WhatsAppIcon sx={{color: 'white'}}/>     
        </Link>
        </div>
        </>
    )
}

export default TerminalService