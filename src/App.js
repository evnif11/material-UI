import Main from './components/Main';
import './App.css';
import BoxTutorial from './components/Box';
import StyleTutorial from './components/StyleTutorial';
import StyleTutorial2 from './components/StyleTutorial2';
import GridTutorial1 from './components/GridTutorial1';
import GridTutorial2 from './components/GridTutorial2';
import TabTutorial from './components/TabTutorial';
import IconTutorial from './components/IconTutorial';

function App() {
  return (
    <div className="App">
      <IconTutorial/>
      <Main />
      <BoxTutorial />
      <StyleTutorial />
      <StyleTutorial2 />
      <GridTutorial1/>
      <GridTutorial2/>
      <TabTutorial/>

    </div>
  );
}

export default App;
