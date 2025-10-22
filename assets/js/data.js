// Personal information for Dev Nema (Salesforce-themed)

const data = {
name: "Igor Ivanenko,",
footerName: "KillroyDev,",
intro: "Salesforce Developer | Apex, LWC, Integrations Specialist | Building Scalable Solutions for Complex Business Problems | e-Commerce",
about: `Hello!
    I'm Igor — a passionate Salesforce Developer with a love for creating efficient, user-friendly solutions in the Salesforce ecosystem. 
    I'm working on salesforce platform since 2018 and keep working. 
    I specialize in Apex, Lightning Web Components, and Salesforce integrations that enhance productivity and customer experience.
    `,
about2: "At free time I’m learning new technologies. Working a lot and with pleasure and I’m ready to learn every day.",
about3: `I have a proven track record of successfully leading development projects from conception to deployment, including automating a lead-to-cash process that reduced manual effort by 40% and building a complex customer portal using LWC.
Committed to driving business value through innovative Salesforce solutions and collaborative team leadership.`,

photo: "assets/img/profilePhoto.jpg",
skills: [
    {
        title: "⚡ Apex Development",
        subtitle: "DML operations / Async Apex / Schedulers / Dynamic Apex / REST services / Triggers / Interfaces / Future Calls / Batch jobs"
    },
    {
        title: "💡 Lightning Web Components",
        subtitle: "Building modern, responsive UI components with LWC framework. Knowledge of Html, CSS, JS"
    },
    {
        title: "🛡️ Salesforce Administration",
        subtitle: "Configuration, customization, and platform maintenance. Reports Dashboards. CTI. Omni-channel"
    },
    {
        title: "🔗 API Integration",
        subtitle: "REST/SOAP integrations, middleware solutions, and external systems"
    },
    {
        title: "📊 SOQL & Data Modeling",
        subtitle: "SOQL / SOSL"
    },
    {
        title: "🚀 Salesforce Flows & Automation",
        subtitle: "Process automation, Flows, and workflow optimization. Validation rules."
    },
    {
        title: "☁️ Salesforce Clouds",
        subtitle: "Sales Cloud, Service Cloud, Commerce Cloud, Einstein AI, Agentfore, Experience Cloud"
    },
    {
        title: "🌍 Languages",
        subtitle: "English - B2 (intermediate)"
    },
],
achievements: [
    {
        title: "Salesforce Certified Administrator",
        badge: "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Administrator.png"
    },
    {
        title: "Salesforce Certified Platform Developer I",
        badge: "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Platform-Developer-I.png"
    },
    {
        title: "Salesforce Certified App Builder",
        badge: "https://developer.salesforce.com/resources2/certification-site/images/Certifications-logo/Platform-App-Builder.png"
    },
],
projects: [
    {
        title: "Salesforce projects",
        desc: "Some usefull projects.",
        link: "https://github.com/Beyond-The-Crowd-Dev"
    },
],
contacts: [
    {
        name: "Email",
        link: "mailto:ivanenko.igor.88@gmail.com",
        icon: "https://cdn-icons-png.flaticon.com/512/732/732200.png"
    },
    {
        name: "Telegram",
        link: "https://t.me/ki11roy",
        icon: "https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/igor-ivanenko",
        icon: "https://cdn-icons-png.flaticon.com/512/3536/3536505.png" },
    {
        name: "Trailhead",
        link: "https://www.salesforce.com/trailblazer/iivanenko",
        icon: "assets/img/trailhead-icon.png"
    }
]
};

// ============ Inject Data into Page ============

document.getElementById("intro").textContent = data.intro;
document.getElementById("about-text").textContent = data.about;
document.getElementById("about-text2").textContent = data.about2;
document.getElementById("about-text3").textContent = data.about3;
document.getElementById("profile-photo").src = data.photo;
document.getElementById("name-footer").textContent = data.footerName;
document.getElementById("year").textContent = new Date().getFullYear();

// Skills
const skillsContainer = document.getElementById("skills-container");
data.skills.forEach(skill => {
    const div = document.createElement("div");
    div.className = "skill";
    div.innerHTML = `
        <h3>${skill.title}</h3>
        <p>${skill.subtitle}</p>
    `;
    skillsContainer.appendChild(div);
});

// Achievements
const achievementsContainer = document.getElementById("achievements-container");
data.achievements.forEach(a => {
    const div = document.createElement("div");
    div.className = "achievement";
    div.innerHTML = `<img src="${a.badge}" alt="${a.title} badge"><p>${a.title}</p>`;
    achievementsContainer.appendChild(div);
});

// Projects
const projectsContainer = document.getElementById("projects-container");
data.projects.forEach(p => {
    const div = document.createElement("div");
    div.className = "project";
    div.innerHTML = `<h3>${p.title}</h3><p>${p.desc}</p><a href="${p.link}" target="_blank">View on GitHub</a>`;
    projectsContainer.appendChild(div);
});

// Contacts
const contactContainer = document.getElementById("contact-container");
data.contacts.forEach(c => {
    const a = document.createElement("a");
    a.href = c.link;
    a.title = c.name;
    a.target = "_blank";
    a.innerHTML = `<img src="${c.icon}" alt="${c.name} icon">`;
    contactContainer.appendChild(a);
});