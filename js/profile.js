const profileText = {
    pageTitle: "Igor Ivanenko | Salesforce Developer",
    bannerTitle: "Hello! I'm a Salesforce Developer",
    bannerSubtitle: "Exploring new technologies",
    bannerDescription2: "Passionate about technology and continuous learning.",
    bannerDescription3: `<p>Since 2018, I have been developing solutions on the Salesforce platform.<br />
        I thrive in dynamic, Agile teams and quickly master new tools and approaches.<br />

        Certified Salesforce Developer with extensive experience in Salesforce platform development, including Apex, LWC, Agentforce, and API integrations. Proficient in full-stack development and Agile Scrum methodologies, skilled at designing and implementing scalable business solutions that optimize processes and enhance user experiences. Strong problem-solving abilities combined with excellent communication and teamwork skills. Proven track record of delivering projects on time and within budget, adapting quickly to evolving technologies, and continuously improving development practices. Committed to driving business value through innovative Salesforce solutions and collaborative team leadership.
        
        My strengths include analytical thinking, clear communication, attention to detail, and a customer-focused mindset.<br />
        I am always eager to explore new technologies and grow professionally.</p>`,
    skillsTitle: "Skills & Projects",
    skillsLang: "Programming Languages: Apex, Java",
    skillsList: [
        "APEX: SOQL/SOSL/DML, Async Apex, Schedulers, Dynamic Apex, REST, Triggers, Interfaces, Batch jobs",
        "Technologies: Lightning, Visualforce, LWC, Servlet, JSP",
        "Web: JS, HTML, CSS, XML, Tomcat, jQuery",
        "Frameworks: NodeJS, Angular, Spring, Hibernate",
        "Testing: JUnit, TestNG, DbUnit, Dev Console",
        "Databases: SOQL, SOSL, SQL",
        "Other: Git, OOP, Design Patterns, MySQL, Maven, GitHub, GitLab",
        "Development tools: IntelliJ IDEA, Visual Studio Code"
    ],
    english: "English: B2 (intermediate)",
    projectsTitle: "Projects:",
    projects: [
        {
            name: "Restaurant Reservation Project (Spring/Hibernate)",
            url: "https://github.com/killroy13/RestaurantReservationProject-SpringHibernate",
            desc: "Electronic system for reserving places in restaurants.<br>Technologies: JDBC, DAO, Servlets, MVC, JSP, Spring, JPA, Hibernate, Ajax, jQuery, Tomcat, Maven, MySQL"
        }
    ],
    certificatesTitle: "Certificates",
    certificates: [
        { name: "JetBI", url: "#" },
        { name: "Platform App Builder", url: "img/AppBuilderCert.jpg" },
        { name: "Platform Developer I", url: "img/Dev1Cert.jpg" },
        { name: "Certified Administrator", url: "img/Admin.jpg" }
    ],
    contactTitle: "Contact Me",
    contactList: [
        { icon: "fa-home", text: "Belarus, Minsk" },
        { icon: "fa-envelope-o", text: "ivanenko.igor.88@gmail.com", url: "mailto:ivanenko.igor.88@gmail.com" }
    ]
};

function renderProfileText() {
    // Banner
    const bannerTitle = document.getElementById('banner-title');
    const bannerSubtitle = document.getElementById('banner-subtitle');
    const bannerDescription2 = document.getElementById('banner-description2');
    const bannerDescription3 = document.getElementById('banner-description3');
    if (bannerTitle) bannerTitle.innerHTML = profileText.bannerTitle;
    if (bannerSubtitle) bannerSubtitle.innerHTML = profileText.bannerSubtitle;
    if (bannerDescription2) bannerDescription2.innerHTML = profileText.bannerDescription2;
    if (bannerDescription3) bannerDescription3.innerHTML = profileText.bannerDescription3;

    // Title
    const pageTitle = document.getElementById('pageTitle');
    if (pageTitle) pageTitle.textContent = profileText.pageTitle;

    // Skills & Projects
    const skillsTitle = document.getElementById('skillsTitle');
    const skillsLang = document.getElementById('skillsLang');
    const skillsUl = document.getElementById('skillsList');
    const english = document.getElementById('english');
    const projectsTitle = document.getElementById('projectsTitle');
    const projectsUl = document.getElementById('projectsList');
    const certificatesTitle = document.getElementById('certificatesTitle');
    const certUl = document.getElementById('certificatesList');

    // Contacts
    const contactTitle = document.getElementById('contactTitle');
    const contactUl = document.getElementById('contactList');

    // Skills & Projects
    if (skillsTitle) skillsTitle.textContent = profileText.skillsTitle;
    if (skillsLang) skillsLang.textContent = profileText.skillsLang;
    if (skillsUl) skillsUl.innerHTML = profileText.skillsList.map(item => `<li>${item}</li>`).join('');
    if (english) english.textContent = profileText.english;
    if (projectsTitle) projectsTitle.textContent = profileText.projectsTitle;
    if (projectsUl) projectsUl.innerHTML = profileText.projects.map(p => `<li><a href="${p.url}" target="_blank">${p.name}</a><div style="font-size:0.98rem; color:#555; margin-top:4px;">${p.desc}</div></li>`).join('');
    if (certificatesTitle) certificatesTitle.textContent = profileText.certificatesTitle;
    if (certUl) certUl.innerHTML = profileText.certificates.map(c => `<li><a href="${c.url}" target="_blank">${c.name}</a></li>`).join('');

    // Contacts
    if (contactTitle) contactTitle.textContent = profileText.contactTitle;
    if (contactUl) contactUl.innerHTML = profileText.contactList.map(c => c.url ? `<li><span class="${c.icon}"></span> <a href="${c.url}">${c.text}</a></li>` : `<li><span class="${c.icon}"></span> ${c.text}</li>`).join('');
}

document.addEventListener('DOMContentLoaded', renderProfileText);
