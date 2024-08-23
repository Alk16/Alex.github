document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            title: 'Projeto 1',
            description: 'Descrição do projeto 1',
            link: 'https://link-para-projeto1.com'
        },
        {
            title: 'Projeto 2',
            description: 'Descrição do projeto 2',
            link: 'https://link-para-projeto2.com'
        }
    ];

    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';
        projectElement.innerHTML = `
            <h3><a href="${project.link}" target="_blank">${project.title}</a></h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectElement);
    });
});

