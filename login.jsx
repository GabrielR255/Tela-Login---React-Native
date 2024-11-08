import React from 'react'

export default function Login() {
  return (
    <div className='inputsbox'>
<div class="input01">
<i class="fa-sharp fa-solid fa-right-to-bracket"></i>
<input class="boxinput" type="email" placeholder="Digite seu Email" />
</div>
      
      <br></br>
      <div class="input02">
      <i class="fa-sharp fa-solid fa-lock"></i>
      <input class ="boxinput" type="password" placeholder="Digite seu Senha" />
      </div>
    </div>
  );
}
