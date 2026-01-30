// DOM加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavigation();
    initScrollEffects();
    initAnimations();
    initMobileMenu();
    initInteractiveCards();
});

// 导航栏功能
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 滚动时改变导航栏样式
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(99, 102, 241, 0.3)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // 平滑滚动到锚点
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // 考虑导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// 滚动效果
function initScrollEffects() {
    const cards = document.querySelectorAll('.tech-card, .project-card, .trend-item, .path-level');

    // 使用Intersection Observer API实现滚动动画
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// 动画效果
function initAnimations() {
    // 为英雄区域添加动画延迟
    const heroElements = document.querySelectorAll('.hero h1, .hero p, .cta-buttons');
    heroElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 0.2}s`;
    });

    // 技术图标悬浮效果
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2) rotate(5deg)';
            this.style.transition = 'transform 0.3s ease';
        });

        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// 移动端菜单
function initMobileMenu() {
    const navbar = document.querySelector('.navbar');
    const container = navbar.querySelector('.container');

    // 创建移动端菜单按钮
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = '☰';
    menuButton.style.cssText = `
        display: none;
        background: transparent;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        z-index: 1001;
    `;

    container.appendChild(menuButton);

    // 移动端响应式菜单
    const navLinks = document.querySelector('.nav-links');

    function checkMobile() {
        if (window.innerWidth <= 768) {
            menuButton.style.display = 'block';
            navLinks.style.display = 'none';
        } else {
            menuButton.style.display = 'none';
            navLinks.style.display = 'flex';
        }
    }

    // 检查并设置移动端菜单
    checkMobile();

    // 窗口大小改变时重新检查
    window.addEventListener('resize', checkMobile);

    // 菜单按钮点击事件
    menuButton.addEventListener('click', function() {
        const isHidden = navLinks.style.display === 'none';
        navLinks.style.display = isHidden ? 'flex' : 'none';

        if (isHidden) {
            navLinks.style.cssText = `
                display: flex;
                flex-direction: column;
                position: absolute;
                top: 70px;
                left: 0;
                right: 0;
                background: rgba(15, 23, 42, 0.98);
                padding: 2rem;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            `;
        }
    });
}

// 交互式卡片
function initInteractiveCards() {
    // 为所有卡片添加点击效果
    const cards = document.querySelectorAll('.tech-card, .project-card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            // 添加点击反馈
            this.style.transform = 'scale(0.98)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });

        // 添加键盘可访问性
        card.setAttribute('tabindex', '0');

        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });

    // 标签悬浮效果
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.2s ease';
        });

        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
}

// 页面加载完成提示
window.addEventListener('load', function() {
    console.log('AI技术学习平台 - 加载完成');
    console.log('最新AI技术资源已就绪');
});

// 性能优化：节流函数
function throttle(func, delay) {
    let lastCall = 0;
    return function(...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        return func(...args);
    };
}

// 性能优化：防抖函数
function debounce(func, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func(...args);
        }, delay);
    };
}

// 添加页面可见性API支持
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        console.log('页面已隐藏');
    } else {
        console.log('页面已显示');
    }
});

// 添加触摸设备检测
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
    document.body.classList.add('touch-device');
    // 为触摸设备优化点击体验
    const interactiveElements = document.querySelectorAll('button, a, .tech-card, .project-card');
    interactiveElements.forEach(el => {
        el.style.cursor = 'pointer';
    });
}

// 复制代码功能
function copyCode(button) {
    // 找到对应的代码块
    const codeSection = button.closest('.code-section');
    const codeBlock = codeSection.querySelector('.code-block code');
    const codeText = codeBlock.textContent;

    // 使用Clipboard API复制代码
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(codeText)
            .then(() => {
                showCopySuccess(button);
            })
            .catch(err => {
                console.error('复制失败:', err);
                fallbackCopy(codeText, button);
            });
    } else {
        // 回退方案
        fallbackCopy(codeText, button);
    }
}

// 回退的复制方法
function fallbackCopy(text, button) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();

    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccess(button);
        } else {
            showCopyError(button);
        }
    } catch (err) {
        console.error('复制失败:', err);
        showCopyError(button);
    }

    document.body.removeChild(textarea);
}

// 显示复制成功提示
function showCopySuccess(button) {
    const originalText = button.textContent;
    button.classList.add('copied');

    // 3秒后恢复原状
    setTimeout(() => {
        button.classList.remove('copied');
        button.textContent = originalText;
    }, 2000);
}

// 显示复制失败提示
function showCopyError(button) {
    const originalText = button.textContent;
    button.textContent = '复制失败';
    button.style.background = '#ef4444';

    // 3秒后恢复原状
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 2000);
}

// 简单的代码高亮功能
function highlightCode() {
    const codeBlocks = document.querySelectorAll('.code-block code');

    codeBlocks.forEach(block => {
        // 获取纯文本内容，避免处理已有的HTML标签
        let code = block.textContent;
        let html = '';

        // 分割代码为行
        const lines = code.split('\n');

        lines.forEach(line => {
            let processedLine = '';

            // 处理每一行
            let pos = 0;
            while (pos < line.length) {
                // 检查字符串（单引号）
                if (line[pos] === "'" && (pos === 0 || line[pos - 1] !== '\\')) {
                    let end = line.indexOf("'", pos + 1);
                    if (end === -1) end = line.length;
                    const str = line.substring(pos, end + 1);
                    processedLine += `<span class="string">${escapeHtml(str)}</span>`;
                    pos = end + 1;
                }
                // 检查字符串（双引号）
                else if (line[pos] === '"' && (pos === 0 || line[pos - 1] !== '\\')) {
                    let end = line.indexOf('"', pos + 1);
                    if (end === -1) end = line.length;
                    const str = line.substring(pos, end + 1);
                    processedLine += `<span class="string">${escapeHtml(str)}</span>`;
                    pos = end + 1;
                }
                // 检查注释
                else if (line[pos] === '#') {
                    const comment = line.substring(pos);
                    processedLine += `<span class="comment">${escapeHtml(comment)}</span>`;
                    break;
                }
                else {
                    processedLine += escapeHtml(line[pos]);
                    pos++;
                }
            }

            html += processedLine + '\n';
        });

        // 现在处理关键字、数字等（在已处理字符串和注释的基础上）
        // 使用更安全的方法
        html = highlightKeywords(html);
        html = highlightNumbers(html);
        html = highlightBuiltins(html);

        block.innerHTML = html.trim();
    });
}

// 转义HTML特殊字符
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// 高亮关键字
function highlightKeywords(code) {
    const keywords = [
        'def', 'class', 'import', 'from', 'as', 'return', 'if', 'else', 'elif',
        'for', 'while', 'try', 'except', 'finally', 'with', 'lambda', 'yield',
        'global', 'nonlocal', 'pass', 'break', 'continue', 'raise', 'assert',
        'True', 'False', 'None', 'and', 'or', 'not', 'in', 'is', 'async', 'await'
    ];

    // 只在不在HTML标签内部的内容中替换
    keywords.forEach(keyword => {
        const regex = new RegExp(`(?<!\\w)(${keyword})(?!\\w)`, 'g');
        code = code.replace(regex, (match, p1) => {
            // 检查是否在span标签内部
            if (code.includes(match + '</span>')) {
                return match;
            }
            return `<span class="keyword">${p1}</span>`;
        });
    });

    return code;
}

// 高亮数字
function highlightNumbers(code) {
    // 匹配不在span标签内的数字
    code = code.replace(/(?<!\w)(\d+\.?\d*)(?!\w)/g, (match) => {
        // 简单检查是否在HTML标签内
        const before = code.substring(code.lastIndexOf('<', code.indexOf(match)));
        if (before.includes(match)) {
            return match;
        }
        return `<span class="number">${match}</span>`;
    });
    return code;
}

// 高亮内置函数
function highlightBuiltins(code) {
    const builtins = [
        'print', 'len', 'range', 'list', 'dict', 'set', 'tuple', 'str', 'int',
        'float', 'bool', 'type', 'isinstance', 'hasattr', 'getattr', 'setattr',
        'open', 'input', 'enumerate', 'zip', 'map', 'filter', 'sum', 'min', 'max',
        'abs', 'round', 'sorted', 'reversed', 'all', 'any', 'ord', 'chr', 'bin',
        'hex', 'oct', 'format', 'help', 'dir', 'vars', 'super', 'self'
    ];

    builtins.forEach(builtin => {
        const regex = new RegExp(`(?<!\\w)(${builtin})\\(`, 'g');
        code = code.replace(regex, (match, p1) => {
            return `<span class="builtin">${p1}</span>(`;
        });
    });

    return code;
}

// 在页面加载完成后应用代码高亮
document.addEventListener('DOMContentLoaded', function() {
    // 暂时禁用代码高亮，避免显示问题
    // highlightCode();
});

// 监听代码区域的滚动事件，优化性能
const codeBlocks = document.querySelectorAll('.code-block');
codeBlocks.forEach(block => {
    block.addEventListener('scroll', throttle(function() {
        // 这里可以添加滚动相关的逻辑
    }, 100));
});
