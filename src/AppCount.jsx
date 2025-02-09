import {useEffect, useRef, useState} from 'react';
import {atom, useAtom, useAtomValue, useSetAtom} from 'jotai';

const counter = atom(0);

const useCallCount = () => {
  const count = useRef(0);
  count.current += 1;
  return count.current;
};

const onRender = () => {
  const count = useRef(1_000);
  count.current += 1;
  console.log(`onRender ${count.current}`);
  return null;
};

export function AppCount() {

  // // в случае использования useState, refresh и всё нормально. console:
  // // call App # 1 (useState) 
  // // onRender 1001
  // // useEffect 
  // console.log(`call App # ${useCallCount()} (useState) `);
  // const [count, setCounter] = useState(0);

  // в случае использования useAtom, refresh и двойное обновление. console:
  // call App # 1 (useAtom)
  // onRender 1001
  // useEffect 
  // call App # 2 (useAtom)
  // onRender 1002
  console.log(`call App # ${useCallCount()} (useAtom)`);
  const count = useAtomValue(counter);
  const setCounter = useSetAtom(counter);
  // const [count, setCounter] = useAtom(counter); // также

  const onClick = () => setCounter(prev => prev + 1);

  useEffect(() => {
    console.log('useEffect ');
  }, []);

  return (
    <div>
      {onRender()}
      <button onClick={onClick}>Click ++ count: {count} </button>
    </div>
  );
}

