// IP másolása
function copyIP() {
    const ip = "neversmp.tejaa.eu:5467";
    navigator.clipboard.writeText(ip);
    
    const toast = document.getElementById("toast");
    toast.style.visibility = "visible";
    setTimeout(() => { toast.style.visibility = "hidden"; }, 2000);
}

// Téma váltás és mentés
function toggleSettings() {
    const body = document.body;
    if (body.classList.contains('glass-theme')) {
        body.classList.replace('glass-theme', 'classic-theme');
        localStorage.setItem('theme', 'classic');
    } else {
        body.classList.replace('classic-theme', 'glass-theme');
        localStorage.setItem('theme', 'glass');
    }
}

// Oldal betöltésekor téma visszaállítása
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'glass';
    document.body.className = savedTheme + '-theme';
};
