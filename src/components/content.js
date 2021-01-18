import logo from '../assets/images/pawprint.svg';

const Content = () => {
    if(true) {
        //not authenticated
        return (
            <div className="content-container p-d-flex p-flex-column p-jc-center p-ai-center">
                <img src={logo} alt="logo" className="content-logo" />
                <h1>VET AGENDA</h1>
            </div>
        )
    }
    return (
        <div className="layout-main">
            {/* <Route path="/" exact component={Dashboard} />
            <Route path="/formlayout" component={FormLayoutDemo} />
            <Route path="/input" component={InputDemo} /> */}
        </div>
    )
}

export default Content;