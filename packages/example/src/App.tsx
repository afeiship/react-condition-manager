import TheComponent from '@jswork/react-condition-manager';
import '@jswork/react-condition-manager/src/style.scss';
import './App.css';


function App() {
  return (
    <>
      <h1>react-condition-manager</h1>
      <TheComponent
        onClick={() => {
          console.log('click me');
        }}>
        Click me
      </TheComponent>
    </>
  );
}

export default App;
