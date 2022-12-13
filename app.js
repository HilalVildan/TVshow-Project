fetch("./tv-shows.json")
  .then((response) => response.json())
  .then((data) => {
    const printScreen = (data) => {
      const shows = document.querySelector(".shows");

      data.forEach((a) => {
        shows.innerHTML += `<div class="card col-4 m-2" style="width: 18rem;">
  <img src="${a.show.image.medium}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${a.show.name}</h5>
    <a href="${a.show.url}" class="btn btn-primary">Details</a>
  </div>
</div> `;
      });
    };

    printScreen(data);
  });
