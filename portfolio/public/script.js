

document.addEventListener("DOMContentLoaded", () => {

    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => {
        console.log(data);

        let html = "";

        data.forEach(project => {
            html += `
            <div class="card">
                <img src="${project.image}" alt="project">
                <h3>${project.name}</h3>
            </div>
            `;
        });

        document.getElementById("project-list").innerHTML = html;
    })
    .catch(err => console.log(err));

});