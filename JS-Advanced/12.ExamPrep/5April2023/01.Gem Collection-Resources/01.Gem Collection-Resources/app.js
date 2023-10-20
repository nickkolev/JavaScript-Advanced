window.addEventListener("load", solve);

function solve() {
    let gemNameElement = document.getElementById("gem-name");
    let colorElement = document.getElementById("color");
    let caratsElement = document.getElementById("carats");
    let priceElement = document.getElementById("price");
    let typeElement = document.getElementById("type");

    let addBtn = document.getElementById("add-btn");

    let previewList = document.getElementById("preview-list");
    let collectionList = document.getElementById('collection');

    addBtn.addEventListener("click", handleAdd);
    function handleAdd(e) {
        e.preventDefault();

        if (
            gemNameElement.value == "" ||
            colorElement.value == "" ||
            caratsElement.value == "" ||
            priceElement.value == "" ||
            typeElement.value == ""
        ) {
            return;
        }

        let name = gemNameElement.value;
        let color = `Color: ${colorElement.value}`;
        let carats = `Carats: ${caratsElement.value}`;
        let price = `Price: ${priceElement.value}$`;
        let type = `Type: ${typeElement.value}`;

        let nameEl = document.createElement("h4");
        nameEl.textContent = name;
        let colorEl = document.createElement("p");
        colorEl.textContent = color;
        let caratsEl = document.createElement("p");
        caratsEl.textContent = carats;
        let priceEl = document.createElement("p");
        priceEl.textContent = price;
        let typeEl = document.createElement("p");
        typeEl.textContent = type;

        let articlePreview = document.createElement("article");
        articlePreview.appendChild(nameEl);
        articlePreview.appendChild(colorEl);
        articlePreview.appendChild(caratsEl);
        articlePreview.appendChild(priceEl);
        articlePreview.appendChild(typeEl);

        let saveBtn = document.createElement("button");
        saveBtn.classList.add("save-btn");
        saveBtn.textContent = "Save to Collection";
        let editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "Edit Information";
        let cancelBtn = document.createElement("button");
        cancelBtn.classList.add("cancel-btn");
        cancelBtn.textContent = "Cancel";

        let listPreview = document.createElement("li");
        listPreview.classList.add("gem-info");
        listPreview.appendChild(articlePreview);
        listPreview.appendChild(saveBtn);
        listPreview.appendChild(editBtn);
        listPreview.appendChild(cancelBtn);

        previewList.appendChild(listPreview);

        let nameEdit = gemNameElement.value;
        let colorEdit = colorElement.value;
        let caratsEdit = caratsElement.value;
        let priceEdit = priceElement.value;
        let typeEdit = typeElement.value;

        gemNameElement.value = '';
        colorElement.value = '';
        caratsElement.value = '';
        priceElement.value = '';
        typeElement.value = '';

        addBtn.disabled = true;

        editBtn.addEventListener("click", handleEdit);
        function handleEdit() {
            gemNameElement.value = nameEdit;
            colorElement.value = colorEdit;
            caratsElement.value = caratsEdit;
            priceElement.value = priceEdit;
            typeElement.value = typeEdit;

            addBtn.disabled = false;

            listPreview.remove();
        }

        saveBtn.addEventListener('click', handleSave);
        function handleSave() {
            let text = `${nameEdit} - Color: ${colorEdit}/ Carats: ${caratsEdit}/ Price: ${priceEdit}$/ Type: ${typeEdit}`;
            let collectionItem = document.createElement('p');
            collectionItem.textContent = text;
            collectionItem.classList.add('collection-item');

            let liEl = document.createElement('li');
            liEl.appendChild(collectionItem);

            collectionList.appendChild(liEl);

            addBtn.disabled = false;
            listPreview.remove();
        }

        cancelBtn.addEventListener('click', handleCancel);
        function handleCancel() {
            addBtn.disabled = false;
            listPreview.remove();
        }
    }
}
