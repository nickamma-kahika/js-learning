import React from 'react';
import NavBar from './NavBar';
import NewNavBar from './NewNavBar';
import TextForm from './TextForm';
import Count from './Count';
import Square from './TicTacToe';

const App = () => {
  return (
    <div>
      <NewNavBar />
      <TextForm />
      <Count />
      <Square value='9' />
    </div>
  );
};
export default App;

// const App = () => {
//   const now = new Date()
//   const a = 10
//   const b = 20
//   return React.createElement(
//     'div',
//     "hello9",
//     React.createElement(
//       'p', { class: 'hello' }, 'Hello world, it is ', now.toString()
//     ),
//     React.createElement(
//       'p', null, a, ' plus ', b, ' is ', a + b
//     ),
//     React.createElement(
//       'h1',{ class: 'greeting' },'Hello ',React.createElement('i', null, "Lucky"),'. Welcome!'
//     )
//   )
// }

