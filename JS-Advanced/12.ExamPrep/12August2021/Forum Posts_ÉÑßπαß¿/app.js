window.addEventListener("load", solve);

function solve() {
    // capture elements
    const inputTitleElement = document.getElementById("post-title");
    const inputCategoryElement = document.getElementById("post-category");
    const inputContentElement = document.getElementById("post-content");
    const publishButtonElement = document.getElementById("publish-btn");
    const clearButtonElement = document.getElementById("clear-btn");

    publishButtonElement.addEventListener("click", publishHandler);
    clearButtonElement.addEventListener("click", clearHandler);

    // on publish function
    function publishHandler(e) {
        e.preventDefault();

        // capture the input values
        let title = inputTitleElement.value;
        let category = inputCategoryElement.value;
        let content = inputContentElement.value;

        // validate input values
        if (title === "" || category === "" || content === "") {
            return;
        }

        // input data is valid => add it to the review container
        let reviewTitleElement = document.createElement("h4");
        reviewTitleElement.textContent = title;

        let reviewCategoryElement = document.createElement("p");
        reviewCategoryElement.textContent = "Category: " + category;

        let reviewContentElement = document.createElement("p");
        reviewContentElement.textContent = "Content: " + content;

        // put input values together in an article element
        let reviewArticle = document.createElement("article");
        reviewArticle.appendChild(reviewTitleElement);
        reviewArticle.appendChild(reviewCategoryElement);
        reviewArticle.appendChild(reviewContentElement);

        // create the 2 buttons
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.classList.add("action-btn", "edit");
        editButton.addEventListener("click", editHandler);

        let approveButton = document.createElement("button");
        approveButton.textContent = "Approve";
        approveButton.classList.add("action-btn", "approve");
        approveButton.addEventListener("click", approveHandler);

        // create the li element with everything
        let liElement = document.createElement("li");
        liElement.classList.add("rpost");
        liElement.appendChild(reviewArticle);
        liElement.appendChild(editButton);
        liElement.appendChild(approveButton);

        // attach the post to the review
        let reviewElement = document.getElementById("review-list");
        reviewElement.appendChild(liElement);

        // clear the inputs
        inputTitleElement.value = "";
        inputCategoryElement.value = "";
        inputContentElement.value = "";
    }

    function approveHandler(e) {
        let liElement = e.target.parentElement;

        let editButton = e.target.parentElement.querySelector(".approve");
        let approveButton = e.target.parentElement.querySelector(".edit");

        liElement.removeChild(editButton);
        liElement.removeChild(approveButton);

        let publishedList = document.getElementById("published-list");
        publishedList.appendChild(liElement);

        e.target.parentElement.remove();
    }

    function editHandler(e) {
        // set the value in the 'Add new post' to the post we want to edit
        inputTitleElement.value =
            e.target.parentElement.querySelector("h4").textContent;
        inputCategoryElement.value = e.target.parentElement
            .querySelector("p")
            .textContent.split(" ")
            .slice(1)
            .join(" ");
        inputContentElement.value = e.target.parentElement
            .querySelectorAll("p")[1]
            .textContent.split(" ")
            .slice(1)
            .join(" ");

        // remove the post we want to edit
        e.target.parentElement.remove();
    }

    function clearHandler(e) {
        let data = Array.from(e.target.parentElement.querySelectorAll("li"));
        data.forEach((element) => {
            element.remove();
        });
    }
}
