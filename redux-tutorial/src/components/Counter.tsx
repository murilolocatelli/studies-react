import { decrement, increment, incrementAsync, incrementByAmount } from "../state/counter/counterSlice";
import { AppDispatch, RootState } from "../state/store";
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>Increment by 2</button>
      <button onClick={() => dispatch(incrementAsync(10))}>Increment by 10 async</button>
    </div>
  )
}

export default Counter