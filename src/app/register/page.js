import styles from './page.module.css'

export default function Register(){
    return(
        <div className={styles.register}>
               
            <form method="POST" action="/api/auth/signup" >
                <h1>JS Game</h1>
                <br/>
                <input name="name" type="text" placeholder="이름을 입력하세요" />
                <input name="birth" type="number" placeholder="생년월일을 입력하세요" />
                <input name="email" type="text" placeholder="아이디를 입력하세요" />
                <input name="password" type="password" placeholder="비밀번호를 입력하세요" />
                <br/>
                <button type="submit">회원가입</button>
            </form>
        </div>
    )
}