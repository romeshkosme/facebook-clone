import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
