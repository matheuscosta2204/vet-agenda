import { Button } from 'primereact/button';
import logo from '../assets/images/pawprint.svg';

const MenuList = () => {
    return (
        <div className="p-d-flex p-flex-column">
            <div className="logo-container p-d-flex p-flex-column p-jc-center p-ai-center p-shadow-7 p-mb-3">
                <img src={logo} alt="logo" className="logo" />
                <h3>VET AGENDA</h3>
            </div>
            <Button label="Home" icon="pi pi-home" iconPos="left" className="p-button-primary p-button-text p-mb-1" />
            <Button label="Logout" icon="pi pi-sign-out" iconPos="left" className="p-button-primary p-button-text p-mb-1" />
        </div>
    )
}

export default MenuList;