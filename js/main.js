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

    // Auto-wrap long code blocks with collapsible details
    wrapLongCodeBlocks();
});

function wrapLongCodeBlocks() {
    const codeBlocks = document.querySelectorAll('pre.code-block');
    const LONG_THRESHOLD = 25; // Lines or more considered long

    codeBlocks.forEach((codeBlock) => {
        const lineCount = (codeBlock.textContent || '').split('\n').length;
        const card = codeBlock.closest('.card');

        if (lineCount > LONG_THRESHOLD && card) {
            const header = card.querySelector('.card-header');
            const headerText = header ? header.textContent.trim() : '代码示例';

            // Create collapsible details element
            const details = document.createElement('details');
            details.style.cssText = 'background: var(--card-bg, #fff); border-radius: 8px; border: 1px solid var(--border-color, #e0e0e0); margin-bottom: 1rem;';

            // Create summary
            const summary = document.createElement('summary');
            summary.textContent = headerText + ' (点击展开/收起)';
            summary.style.cssText = 'padding: 0.75rem 1rem; cursor: pointer; font-weight: 600; color: var(--text-primary, #1a1a2e); list-style: none; display: flex; align-items: center; justify-content: space-between; background: var(--bg-secondary, #f8f9fa); border-radius: 8px;';
            summary.innerHTML += ' <span style="font-size: 0.7rem; color: var(--text-secondary, #666);">▼</span>';

            details.appendChild(summary);

            // Create content wrapper
            const content = document.createElement('div');
            content.style.cssText = 'padding: 0;';

            // Move code block to details
            const wrapper = document.createElement('div');
            wrapper.style.cssText = 'position: relative; padding: 1rem; padding-top: 2.5rem;';

            // Add copy button
            const copyBtn = document.createElement('button');
            copyBtn.textContent = '复制代码';
            copyBtn.style.cssText = 'position: absolute; top: 0.5rem; right: 0.5rem; padding: 0.25rem 0.5rem; font-size: 0.75rem; background: var(--primary, #4f46e5); color: white; border: none; border-radius: 4px; cursor: pointer;';
            copyBtn.onclick = function() { copyCode(this); };

            wrapper.appendChild(codeBlock);
            wrapper.appendChild(copyBtn);
            content.appendChild(wrapper);
            details.appendChild(content);

            // Hide original header
            if (header) header.style.display = 'none';

            // Insert before the card's content or at the end
            const firstChild = card.firstChild;
            card.insertBefore(details, firstChild);

            // Toggle functionality
            details.addEventListener('toggle', function() {
                const arrow = summary.querySelector('span:last-child');
                if (arrow) {
                    arrow.style.transform = this.open ? 'rotate(180deg)' : 'rotate(0deg)';
                }
            });
        }
    });
}

// Simple copy function
function copyCode(button) {
    const wrapper = button.closest('div[style*="position: relative"]') || button.parentElement;
    const codeBlock = wrapper ? wrapper.querySelector('.code-block code') : null;
    if (!codeBlock) return;

    const codeText = codeBlock.textContent;

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codeText).then(() => {
            button.textContent = '已复制';
        }).catch(err => {
            console.error('复制失败:', err);
        });
    } else {
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

    setTimeout(() => {
        button.textContent = '复制代码';
    }, 2000);
}
