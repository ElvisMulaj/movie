
import "./login.scss"



export default function Login() {

    
  return (
    <div className="login">
        <div className="top">
            <div className="wrapper">
            <img className="logo"
            src="https://filma365.net/wp-content/uploads/2022/09/ss.png"
            alt=''/>
           
           </div>
        </div>
        <div className="container">
            <form >
                <h1>Regjistrohu </h1>
                <input type="email" placeholder="email " />
                <input type="password" placeholder="password" />
                <button className="loginButton">Regjistrohu</button>
                <span>Welcome</span>
                <small>
                    Kjo faqe ruan te dhenat tuaja , siguroihuni qe nuk jeni nje bot
                </small>
            </form>
        </div>
         
    </div>
  )
}
