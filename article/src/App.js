import './App.css';
import Article from './Article/Article';

function App() {
  return (
    <div className="App">
      <Article title="This is an article" 
      content="Roses are red, Violets are blue, Unexpected ' { ' on line 32."
      route="https://www.dogfoodadvisor.com/wp-content/uploads/2020/02/Siberian-Husky-Puppy.jpg" />
    </div>
  );
}

export default App;
