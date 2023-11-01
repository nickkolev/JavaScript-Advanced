function attachEvents() {
    const url = `http://localhost:3030/jsonstore/messenger`;
    const sendBtn = document.getElementById("submit");
    const refreshBtn = document.getElementById("refresh");
    const messagesElement = document.getElementById("messages");

    sendBtn.addEventListener("click", handleSend);
    refreshBtn.addEventListener("click", handleRefresh);

    function handleSend() {
        const authorElement = document.querySelector('input[name="author"]');
        const contentElement = document.querySelector('input[name="content"]');

        let message = {
            author: authorElement.value,
            content: contentElement.value,
        };

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(message),
        })
            .then((res) => {
                authorElement.value = "";
                contentElement.value = "";
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function handleRefresh() {
        fetch(url, {
            method: "GET",
        })
            .then((res) => {
                if (res.status !== 200) {
                    throw new Error("Wrong status code!");
                }

                return res.json();
            })
            .then((data) => {
                messagesElement.value = Object.values(data)
                    .map(({ author, content }) => `${author}: ${content}`)
                    .join("\n");
            })
            .catch((err) => {
                console.log(err);
            });
    }
}

attachEvents();
