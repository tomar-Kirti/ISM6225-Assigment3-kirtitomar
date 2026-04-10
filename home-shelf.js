(function () {
  document.addEventListener("DOMContentLoaded", function () {
    var shelf = document.getElementById("home-shelf");
    var books = window.READING_ROOM_BOOKS;
    if (!shelf || !books || !books.length) return;

    books.slice(0, 6).forEach(function (book) {
      var col = document.createElement("div");
      col.className = "col-4 col-md-2";

      var link = document.createElement("a");
      link.className = "home-shelf-item";
      link.href = "books.html";
      link.title = "View catalog - " + book.title;

      var wrap = document.createElement("div");
      wrap.className = "home-shelf-cover";

      var img = document.createElement("img");
      img.src = book.coverUrl;
      img.alt = "";
      img.loading = "lazy";

      var fb = document.createElement("span");
      fb.className = "home-shelf-fallback d-none";
      fb.textContent = book.title
        .split(/\s+/)
        .map(function (w) {
          return w.charAt(0);
        })
        .join("")
        .slice(0, 3)
        .toUpperCase();

      img.addEventListener("error", function () {
        img.classList.add("d-none");
        fb.classList.remove("d-none");
        wrap.classList.add("home-shelf-cover--placeholder");
      });

      wrap.appendChild(img);
      wrap.appendChild(fb);
      link.appendChild(wrap);
      col.appendChild(link);
      shelf.appendChild(col);
    });
  });
})();
