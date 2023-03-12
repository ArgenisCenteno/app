import './Login.scss'

const Login = () => {
  return (
    <div className='login'>
        <div className="card">
          <div className="left">
              <h1>Hola Mundo</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla aperiam explicabo
                 impedit, harum corrupti odit recusandae fugiat, voluptas nobis beatae
                </p>
                <span>¿No tienes una cuenta?</span>
                <button>Reigstrarse</button>
          </div>
          <div className="right">
              <h1>Iniciar sesión</h1>
              <form>
                <input type='text' placeholder='Usuario' />
                <input type='password' placeholder='Contraseña' />
                <button>Ingresar</button>
              </form>
          </div>
        </div>
    </div>
  )
}

export default Login