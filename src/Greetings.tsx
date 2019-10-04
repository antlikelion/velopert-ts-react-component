import React from 'react'

type GreetingsProps = {
    name: string
    mark: string
    optional?: string
}

// React.FC를 안 쓰고도 충분히 컴포넌트를 만들 수 있다!
function Greetings({name, mark, optional }:GreetingsProps){
    return(
        <div>
            Hello, {name} {mark}
            {optional && <p>{optional}</p>}
        </div>
    )
}

Greetings.defaultProps = {
    mark: '!'
}

export default Greetings