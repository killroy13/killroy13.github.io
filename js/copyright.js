// copyright.js
function setCopyright() {
    const year = new Date().getFullYear();
    const copyright = document.getElementById('copyright');
    if (!copyright) return;
    copyright.innerHTML = `&copy; ${year} Igor Ivanenko. All rights reserved.`;
}

document.addEventListener('DOMContentLoaded', setCopyright);
