import {Button} from 'primereact/button';
import 'primereact/resources/themes/vela-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const App = () => {
  return (
    <div className="p-d-flex p-jc-center p-ai-center">
      <div className="card">
        <Button label="Click" icon="pi pi-check" />        
        <p>Number of Clicks: </p>
      </div>
    </div>
  );
}

export default App;