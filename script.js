const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const signupForm = document.getElementById('signup-form');
const loginForm = document.getElementById('login-form');


let contas = [];

registerBtn.addEventListener('click', () => {
    container.classList.add('active');
})

loginBtn.addEventListener('click', () => {
    container.classList.remove('active');
})


function criarConta(name, email, senha) {
    
    const existentconta = contas.find(conta => conta.email === email);
    if (existentconta) {
        alert('Este email já está em uso.');
        return;
    }

    
    const novaconta = { name, email, senha };
    contas.push(novaconta);
    console.log('Conta criada com sucesso:', novaconta);

    alert('Conta criada com sucesso!');
}



    function fazerLogin(email, senha) {
        const conta = contas.find(conta => conta.email === email && conta.senha === senha);
        if (!conta) {
            alert('Credenciais inválidas.');
            return;
        }
    
        console.log('Login bem-sucedido:', conta);
        window.location.href = 'pagina2.html'; 
    }

signupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const senha = document.getElementById('signup-password').value;
    criarConta(name, email, senha);
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-password').value;
    fazerLogin(email, senha);
});

const entrarBtn = document.getElementById('entrarBtn');

entrarBtn.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const senha = document.getElementById('login-password').value;
    fazerLogin(email, senha);
});