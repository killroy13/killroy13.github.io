// profile.js
export const profile = {
    name: "Igor Ivanenko",
    title: "Web Developer & Designer",
    bio: "Passionate about building modern, beautiful web experiences. Specialized in front-end development, UI/UX, and creative coding.",
    location: "Kyiv, Ukraine"
};

function renderProfile() {
    const info = document.getElementById('profile-info');
    if (!info) return;
    info.innerHTML = `
        <h2>${profile.name}</h2>
        <h3>${profile.title}</h3>
        <p>${profile.bio}</p>
        <p><strong>Location:</strong> ${profile.location}</p>
    `;
}

document.addEventListener('DOMContentLoaded', renderProfile);
