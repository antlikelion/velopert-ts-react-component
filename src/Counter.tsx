import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState<number>(0);
    // generic이 적용되는 것을 제외하면 js와 별 차이가 없다
    // 심지어 generic을 생략해도 알아서 타입 유추를 해준다
    // 따라서 상태가 null 일 수도, 아닐수도 있을 때 generic을 활용하면 좋다(밑처럼)
    // const [count, setCount] = useState<number|null>(0);
    // 또한 상태의 타입이 까다로운 구조를 가진 객체거나 배열일 경우엔 generic을 명시해주는 게 좋다(밑처럼)
    // type Todos = {id:number; text:string; done:boolean}
    // const [todos, setTodos] = useState<Todos[]>([])

    const onIncrease = () => setCount(count + 1)
    const onDecrease = () => setCount(count - 1)
    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}

export default Counter;