import logo from '../assets/images/pawprint.svg';

const EmptyPage = () => {
    return (
        <div className="content-container p-d-flex p-flex-column p-jc-center p-ai-center">
            <img src={logo} alt="logo" className="content-logo" />
            <h1>BEM VINDO</h1>
        </div>
    )
}

export default EmptyPage;