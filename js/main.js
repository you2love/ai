// Simplified JavaScript - No animations or effects
document.addEventListener('DOMContentLoaded', function() {
    // Simple navigation highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
});

// Simple copy function - no animations
function copyCode(button) {
    const codeSection = button.closest('.code-section');
    const codeBlock = codeSection.querySelector('.code-block code');
    const codeText = codeBlock.textContent;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codeText)
            .then(() => {
                button.textContent = '已复制';
            })
            .catch(err => {
                console.error('复制失败:', err);
            });
    } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = codeText;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        button.textContent = '已复制';
    }

    // Reset button text after 2 seconds
    setTimeout(() => {
        button.textContent = '复制代码';
    }, 2000);
}
