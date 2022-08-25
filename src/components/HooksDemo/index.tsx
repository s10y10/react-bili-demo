import {
  useState,
  useEffect,
  useLayoutEffect,
  useContext,
  useReducer,
  useCallback,
  useMemo,
  useRef,
  useId,
} from 'react';
import { createContext } from 'react';
import { HooksDemoWrapper } from './style';

type ReducerAction = 'decrement' | 'increment';

const initialState = { count: 0 };
function reducer(state: { count: number }, action: { type: ReducerAction }) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

const themes = {
  light: '#ff0000',
  dark: '#000000',
};
const Context = createContext(themes.light);

export default function HooksDemo() {
  const consoleDiv = (time: string) => {
    const div = document.getElementById('stateDiv');
    console.log(time, div?.innerHTML);
  };

  const [state, setState] = useState(100);
  useEffect(() => {
    consoleDiv('useEffect');
  }, [state]);
  useLayoutEffect(() => {
    consoleDiv('useLayoutEffect');
  }, [state]);

  const [theme, setTheme] = useState(themes.dark);

  const [countState, dispatch] = useReducer(reducer, initialState);

  const memoizedCallback = useCallback(() => {
    console.log(state + 200);
  }, [state]);

  const memoizedValue = useMemo(() => {
    return state + 200;
  }, [state]);

  const refContainer = useRef(null);
  useEffect(() => {
    console.log(refContainer.current);
  }, []);

  return (
    <Context.Provider value={theme}>
      <HooksDemoWrapper>
        <button
          ref={refContainer}
          id='stateDiv'
          onClick={() => setState((pre) => pre + 1)}
        >
          state:{state}
        </button>
        <div>memoizedValue:{memoizedValue}</div>
        <button
          onClick={() =>
            setTheme((pre) =>
              pre === themes.dark ? themes.light : themes.dark
            )
          }
        >
          theme
        </button>
        <div>{countState.count}</div>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: 'increment' })}>
          increment
        </button>
        <ContextFC onCallBack={memoizedCallback}></ContextFC>
      </HooksDemoWrapper>
    </Context.Provider>
  );
}

function ContextFC({ onCallBack }: { onCallBack: Function }) {
  console.log('子组件reRender');
  const theme = useContext(Context);
  const id = useId();
  return (
    <div id={id} style={{ display: 'flex' }}>
      <div style={{ background: theme, width: '20px', height: '20px' }}></div>
      <button
        onClick={() => {
          onCallBack();
        }}
      >
        onCallBack
      </button>
    </div>
  );
}
