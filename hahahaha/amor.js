document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const motivos = document.getElementById('motivos');
    const fotos = document.getElementById('fotos');
    const simBtn = document.getElementById('simBtn');
    const naoBtn = document.getElementById('naoBtn');
    const mostrarFotosBtn = document.getElementById('mostrarFotosBtn');
    const inicioBtn = document.getElementById('inicioBtn');

    simBtn.addEventListener('click', function() {
        content.style.display = 'none';
        motivos.style.display = 'block';
    });

    naoBtn.addEventListener('click', function() {
        content.style.display = 'block';
        motivos.style.display = 'none';
        fotos.style.display = 'none';

        // Adiciona um texto e um botão "Voltar ao Início" à página inicial
        const naoMessage = document.createElement('p');
        naoMessage.textContent = 'Você sempre terá um lugar especial no meu coração.';
        content.appendChild(naoMessage);
        const voltarAoInicioBtn = document.createElement('button');
        voltarAoInicioBtn.textContent = 'Voltar ao Início';
        voltarAoInicioBtn.addEventListener('click', function() {
            window.location.href = 'acesso.html'; // Redireciona para a página inicial (index.html)
        });
        content.appendChild(voltarAoInicioBtn);
    });

    mostrarFotosBtn.addEventListener('click', function() {
        motivos.style.display = 'none';
        fotos.style.display = 'block';
    });

    inicioBtn.addEventListener('click', function() {
        window.location.href = 'acesso.html'; // Redireciona para a página inicial (index.html)
    });
});





