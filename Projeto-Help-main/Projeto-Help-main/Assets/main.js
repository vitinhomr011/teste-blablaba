// Interações JS para melhorar experiência do usuário
// Feedback visual, animações e navegação suave

document.addEventListener('DOMContentLoaded', function() {
    // Animação suave ao rolar para seções
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Feedback visual em botões
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.97)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = 'scale(1)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });

    // Foco visual em inputs
    document.querySelectorAll('input, textarea, select').forEach(el => {
        el.addEventListener('focus', () => {
            el.style.boxShadow = '0 0 0 2px #4ca1c5';
        });
        el.addEventListener('blur', () => {
            el.style.boxShadow = '';
        });
    });

    // Mensagem de sucesso ao enviar formulário de doação
    const form = document.querySelector('form.Baixo');
    if(form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            form.reset();
            alert('Obrigado por sua doação! Sua contribuição faz a diferença.');
        });
    }
});
