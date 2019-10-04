import React from 'react'

type GreetingsProps = {
    name: string
    mark: string
}

// React.FC를 안 쓰고도 충분히 컴포넌트를 만들 수 있다!
const Greetings = ({name, mark}:GreetingsProps) => (
    <div>
        Hello, {name} {mark}
    </div>
)

Greetings.defaultProps = {
    mark: '!'
}

export default Greetings