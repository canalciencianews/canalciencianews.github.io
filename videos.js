// Puxa o JSON e monta os cards
fetch("videos.json")
    .then(res => res.json())
    .then(videos => {
        const container = document.getElementById("videos-container");

        videos.forEach(video => {
            const card = document.createElement("div");
            card.classList.add("video-card");

            // Converte link para embed do YouTube
            let embedLink = "";
            if (video.link.includes("youtu.be/")) {
                // Link curto youtu.be
                const videoId = video.link.split("youtu.be/")[1];
                embedLink = `https://www.youtube.com/embed/${videoId}`;
            } else if (video.link.includes("watch?v=")) {
                // Link normal watch
                const videoId = video.link.split("watch?v=")[1];
                embedLink = `https://www.youtube.com/embed/${videoId}`;
            } else {
                // Se não for YouTube, mantém link normal (ou colocar placeholder)
                embedLink = video.link;
            }

            card.innerHTML = `
                <iframe src="${embedLink}" frameborder="0" allowfullscreen></iframe>
                <div class="video-info">
                    <h3>${video.titulo}</h3>
                    <p>${video.descricao}</p>
                </div>
            `;

            // Redireciona para YouTube ao clicar no card
            card.addEventListener("click", () => {
                window.open(video.link, "_blank");
            });

            container.appendChild(card);
        });
    })
    .catch(err => {
        console.error("Erro ao carregar os vídeos:", err);
    });
