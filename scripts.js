document.addEventListener("DOMContentLoaded", () => {
    // Dodaj przycisk promocji
    const promoButton = document.createElement("button");
    promoButton.textContent = "Pokaż promocję tygodnia!";
    document.body.appendChild(promoButton);

    promoButton.addEventListener("click", () => {
        alert("Promocja tygodnia: Chleb razowy 20% taniej!");
    });

    // Pobieranie listy produktów z API
    fetch("http://127.0.0.1:8000/produkty/produkty/")
        .then(response => response.json())
        .then(data => {
            const produktySection = document.getElementById("produkty");
            const produktyList = produktySection.querySelector("ul");
            produktyList.innerHTML = ""; // Wyczyść istniejące produkty

            data.forEach(produkt => {
                const listItem = document.createElement("li");
                const produktHtml = `
                    <h2>${produkt.nazwa}</h2>
                    <p>${produkt.opis}</p>
                    <p>Cena: ${produkt.cena} PLN</p>
                `;
                listItem.innerHTML = produktHtml;

                if (produkt.obrazek) {
                    const img = document.createElement("img");
                    img.src = produkt.obrazek;
                    img.alt = produkt.nazwa;
                    listItem.appendChild(img);
                }

                produktyList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Błąd podczas pobierania produktów:", error);
        });
});
