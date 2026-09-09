const form=document.getElementById('loginForm'),msg=document.getElementById('loginMsg'),pass=document.getElementById('password');
if(sessionStorage.getItem('loggedIn')==='yes') location.href='index.html';
document.getElementById('showPass').onclick=()=>{pass.type=pass.type==='password'?'text':'password'};
document.getElementById('forgot').onclick=e=>{e.preventDefault();msg.textContent='Password recovery needs a backend email service.';msg.className='message error'};
form.onsubmit=e=>{e.preventDefault();const email=document.getElementById('email').value.trim();if(!email||!email.includes('@'))return show('Enter a valid email address.');if(pass.value.length<6)return show('Password must be at least 6 characters.');sessionStorage.setItem('loggedIn','yes');location.href='index.html'};
function show(t){msg.textContent=t;msg.className='message error'}