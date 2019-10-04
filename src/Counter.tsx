import React, {useReducer} from 'react';

type Action = {type:'INCREASE'} | {type:"DECREASE"}
// 액션은 |(or) 로 나열하면 된다

// 아래처럼 reducer를 만들 때에는 state의 타입과 reducer의 반환하는 타입이 일치해야 한다
function reducer(state:number, action: Action): number {
    switch(action.type){
        case 'INCREASE':
            return state + 1;
        case 'DECREASE':
            return state - 1;
        default:
            throw new Error('Unhandled action')
    }
}

function Counter() {
    const [count, dispatch] = useReducer(reducer, 0)
    const onIncrease = () => dispatch({type:'INCREASE'})
    const onDecrease = () => dispatch({type:'DECREASE'})
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