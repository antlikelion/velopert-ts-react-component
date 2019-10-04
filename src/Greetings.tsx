import React from 'react'

type GreetingsProps = {
    name: string
    mark: string
    optional?: string
    onClick: (name:string)=>void
    // 아무것도 반환하지 않는 함수
}

// React.FC를 안 쓰고도 충분히 컴포넌트를 만들 수 있다!
function Greetings({name, mark, optional, onClick }:GreetingsProps){
    const handleClick = () => onClick(name)
    return(
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
            <div>
                <button onClick={handleClick}>Click Me</button>
            </div>
        </div>
    )
}

Greetings.defaultProps = {
    mark: '!'
}

export default Greetings