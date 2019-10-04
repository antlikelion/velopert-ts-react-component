import React, {useState, useRef} from 'react';

type MyFormProps = {
    onSubmit: (form: { name:string; description: string}) => void
}

function MyForm({onSubmit}:MyFormProps){
    const inputRef = useRef<HTMLInputElement>(null)
    // ref안에 DOM을 담을 때는 초기값을 null로 설정해야 한다
    // DOM위에 커서를 올리면 generic으로 담아줘야할 타입을 확인할 수 있음

    const [form, setForm] = useState({
        name:'',
        description:''
    })
    
    const {name, description}=form

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        // e값을 뭘로 할 지 모르겠을 땐 일단 any로 설정
        // 밑에서 onChange에 커서 올리면 머라머라 뜸 그거 복붙하면 댐;;
        const {name,value} = e.target
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        // 여기도 아직 모르니까 any
        // 밑에서 onSubmit에 커서 올리면 머라머라 뜸 그거 복붙하면 댐;;
        e.preventDefault();
        // 아마 이게 없으면 새로고침 때문에 state정보 다 날아갈거임
        onSubmit(form)
        setForm({
            name:'',
            description:''
        })

        // inputRef.current안의 값을 사용하기 위해서 null체킹을 해줘야 함
        if(!inputRef.current) return;
        inputRef.current.focus()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} ref={inputRef}/>
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    )
}

export default MyForm