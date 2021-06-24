import './App.css';
import Header from './component/Header/Header';
import Sidebar from './component/Sidebar/Sidebar';
import Feed from './component/Feed/Feed';

function App() {
  return (
    <div className="app">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
