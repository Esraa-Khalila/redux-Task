import { useSelector, useDispatch } from "react-redux";
import { add, dec } from "./Store/Math";
import { useState } from "react";

 export function Test() {
    const Math = useSelector((state) => state.count);
    const dispatch = useDispatch();
      return (
        <>
          {Math}
        <button onClick={() => dispatch(add())}>+</button>
        <button onClick={() => dispatch(dec())}>-</button>

        </>
      );
}
