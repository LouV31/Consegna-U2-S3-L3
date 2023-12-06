fetch("https://striveschool-api.herokuapp.com/books")
    .then((responseObj) => {
        if (responseObj.ok) {
            return responseObj.json();
        }
    })
    .then((libraryArr) => {
        console.log(libraryArr);
        libraryArr.forEach((book) => {
            const container = document.getElementById("booksRow");
            const col = document.createElement("div");
            col.classList.add("col");
            col.innerHTML = `
                <div class="card border border-2 border-dark mb-4" d-flex flex-column style="">
                    <img src="${book.img}" class="card-img-top img-fluid flex-grow-1" alt="Book Cover" style="max-height: 390px; object-fit: cover">
                    <div class="card-body flex-grow-0">
                       <h5 class="card-title">${book.title}</h5>
                       <div class="d-flex flex-column mb-4">
                            <p class="card-text mb-1">Category: <span class="text-info">${book.category}</span></p>
                            <p class="card-text">Price: ${book.price}€</p>
                       </div>
                       <div class="d-flex align-items-center">
                       <a href="#" class="btn btn-success fw-medium">Add to Cart</a>
                       <a href="#" class="discard btn btn-danger fw-medium ms-auto">Discard</a>
                       </div>
                    </div>
                </div>
            `;
            container.appendChild(col);
            function discard() {
                const discardBtns = document.querySelectorAll(".discard");
                discardBtns.forEach((button) => {
                    button.addEventListener("click", function (event) {
                        event.target.closest(".col").remove();
                    });
                });
            }
            discard();
        });
    })
    .catch((error) => console.log("ERROR", error));
