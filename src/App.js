import Stuff from './components/Stuff'
import MoreStuff from './components/MoreStuff';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <Stuff myStuff={[1, 2, 3]} myPets={["Duke", "Another one"]}/>
      <MoreStuff />
      <Stuff myStuff={[1, 2, 3]} myPets={["Duke", "Another one"]}/>
    </>
  );
}

export default App;
