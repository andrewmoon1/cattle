import React from 'react';
import './style/App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Code from './components/Code';

// class App extends Component {
//
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Code />
//         <Footer />
//       </div>
//     );
//   }
// }
//
const App = () => {
  return (
    <div className="App">
      <Header />
      <Code />
      <Footer />
    </div>
  );
};

export default App;
