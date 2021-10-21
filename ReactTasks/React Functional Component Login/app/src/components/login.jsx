import { useState, useEffect } from 'react'


const Login = function Login() {
    const [nickName, SetNickName] = useState("")
    const [password, SetPassword] = useState("")

    const submit = (e) => {
        e.preventDefault()
        SetNickName(e.target['nickName'].value)
        SetPassword(e.target['password'].value)
    }


    useEffect(() => {

        let h1 = document.querySelector('h1')
        let nickNameHack = document.querySelector('.nickName-hack')
        let passwordHack = document.querySelector('.password-hack')
        if (nickName === "Nebuchadnezzar" && password === '12345') {
            h1.innerHTML = "Hack Olundu"
            nickNameHack.innerHTML = '  '
            passwordHack.innerHTML = "  "
        }
        else if (password === '12345') {
            passwordHack.innerHTML = "Şifrə hack Olundu"
            h1.innerHTML = " "
        }
        else if (nickName === "Nebuchadnezzar") {
            nickNameHack.innerHTML = "Nickname hack olundu"
            h1.innerHTML = " "
        }
        else {
            nickNameHack.innerHTML = " "
            passwordHack.innerHTML = " "

        }


    }, [nickName, password])
    return (
        <>
            <form onSubmit={submit}>
                <div className="form-group">
                    <h1></h1>
                    <input type="text" name="nickName" className="form-control mb-4" placeholder="NickName" />
                    <small className='nickName-hack'></small>
                    <input type="password" name="password" className="form-control mb-4" placeholder="Password" />
                    <small className="password-hack"></small>
                    <input type="submit" value="Submit" className="btn btn-success form-control mt-2" />
                </div>
            </form>
        </>
    )
}
export default Login