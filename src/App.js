import React from 'react';
import { useDispatch } from 'react-redux';
import { doModifyDefault } from './redux/defaultActions';

const App = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(doModifyDefault('State modified'));
        }}>
        Change default state
      </button>
    </div>
  );
};

export default App;
