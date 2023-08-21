import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from 'react';
import React from 'react';
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
  // effect处理函数
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
    console.log('refContainer', refContainer.current);
  }, []);

  return (
    <Context.Provider value={theme}>
      <HooksDemoWrapper>
        <button
          ref={refContainer}
          id='stateDiv'
          onClick={() => setState((pre) => pre + 1)}
        >
          改变state:{state}
        </button>
        <div>缓存的memoizedValue:{memoizedValue}</div>
        <button
          onClick={() =>
            setTheme((pre) =>
              pre === themes.dark ? themes.light : themes.dark
            )
          }
        >
          改变theme
        </button>
        <div>useReducer的值{countState.count}</div>
        <button onClick={() => dispatch({ type: 'decrement' })}>
          decrementReducer
        </button>
        <button onClick={() => dispatch({ type: 'increment' })}>
          incrementReducer
        </button>
        <ChildFC onCallBack={memoizedCallback}></ChildFC>
      </HooksDemoWrapper>
    </Context.Provider>
  );
}

// 使用React.memo后,只要state不改变,子组件就不会重新render
const ChildFC = React.memo(({ onCallBack }: { onCallBack: Function }) => {
  console.log('子组件reRender');
  const theme = useContext(Context);
  const id = useId();
  return (
    <div id={id} style={{ display: 'flex', color: '#fff' }}>
      <div style={{ background: theme }}>Context里的颜色</div>
      <button
        onClick={() => {
          onCallBack();
        }}
      >
        调用父级传来的CallBack
      </button>
    </div>
  );
});
