// Puxa o JSON e monta os cards
fetch("videos.json")
    .then(res => res.json())
    .then(videos => {
        const container = document.getElementById("videos-container");

        videos.forEach(video => {
            const card = document.createElement("div");
            card.classList.add("video-card");

            card.innerHTML = `
                <iframe src="${video.link.replace("watch?v=", "embed/")}" allowfullscreen></iframe>
                <div class="video-info">
                    <h3>${video.titulo}</h3>
                    <p>${video.descricao}</p>
                </div>
            `;

            // Redireciona para YouTube ao clicar
            card.addEventListener("click", () => {
                window.open(video.link, "_blank");
            });

            container.appendChild(card);
        });
    });
