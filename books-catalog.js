(function () {
  function esc(s) {
    var d = document.createElement("div");
    d.textContent = s;
    return d.innerHTML;
  }

  document.addEventListener("DOMContentLoaded", function () {
    var grid = document.getElementById("book-grid");
    var books = window.READING_ROOM_BOOKS;
    if (!grid || !books || !books.length) return;

    books.forEach(function (book) {
      var col = document.createElement("div");
      col.className = "col-6 col-md-4 col-lg-3";

      var article = document.createElement("article");
      article.className = "book-tile feature-card h-100 overflow-hidden";
      article.setAttribute("aria-label", book.title + " by " + book.author);

      var frame = document.createElement("div");
      frame.className = "book-cover-frame";

      var img = document.createElement("img");
      img.className = "book-cover";
      img.src = book.coverUrl;
      img.alt = book.title + " cover";
      img.loading = "lazy";

      var fallback = document.createElement("div");
      fallback.className = "book-cover-fallback d-none";
      fallback.setAttribute("aria-hidden", "true");
      var letter = document.createElement("span");
      letter.className = "book-cover-fallback-letter";
      letter.textContent = book.title.charAt(0);
      fallback.appendChild(letter);

      img.addEventListener("error", function () {
        img.classList.add("d-none");
        fallback.classList.remove("d-none");
      });

      frame.appendChild(img);
      frame.appendChild(fallback);

      var body = document.createElement("div");
      body.className = "book-tile-body p-3";
      body.innerHTML =
        '<h2 class="h6 book-tile-title mb-1">' +
        esc(book.title) +
        '</h2><p class="small text-muted mb-2">' +
        esc(book.author) +
        '</p><p class="small mb-2"><span class="badge genre-badge">' +
        esc(book.genre) +
        "</span></p>" +
        '<p class="small mb-0 book-tile-meta"><strong>' +
        esc(String(book.rating)) +
        "</strong> · " +
        esc(String(book.year)) +
        " · " +
        esc(String(book.pages)) +
        " pp.</p>";

      article.appendChild(frame);
      article.appendChild(body);
      col.appendChild(article);
      grid.appendChild(col);
    });
  });
})();
