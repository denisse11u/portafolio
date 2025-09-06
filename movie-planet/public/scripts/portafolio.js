const perfilContainer = document.getElementById("perfilContainer");

document.addEventListener("DOMContentLoaded", () => {
  loadPerfil();
  loadRepos();
});

document.addEventListener("scroll", () => {
  console.log(perfilContainer.children.length);
});

function loadPerfil() {
  fetch("https://api.github.com/users/denisse11u")
    .then((res) => res.json())
    .then((data) => {
      const perfilContainer = document.getElementById("perfilContainer");
      perfilContainer.innerHTML = `
        <img src="${data.avatar_url}" alt="Avatar" width="120" />
        <h4>${data.login}</h4>
        <p>${data.bio || ""}</p>
        <a href="${data.html_url}" target="_blank">Ver GitHub</a>
      `;
    });
}

function loadRepos() {
  fetch("https://api.github.com/users/denisse11u/repos")
    .then((res) => res.json())
    .then((repos) => {
      const reposContainer = document.getElementById("repos");
      if (reposContainer) {
        reposContainer.innerHTML = repos.map(repo => `
          <div class="repo">
            <h5>${repo.name}</h5>
            <p>${repo.description || ""}</p>
            <a href="${repo.html_url}" target="_blank">Ir al repositorio</a>
          </div>
        `).join('');
      }
    });
}