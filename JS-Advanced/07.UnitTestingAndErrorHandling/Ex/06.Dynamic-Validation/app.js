function validate() {
    
    let inputEmailElement = document.getElementById('email');

    inputEmailElement.addEventListener('change', onChange);

    function onChange(e) {
        const targetStringValue = e.target.value;

        const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
        const isRemoveOperation = pattern.test(targetStringValue);

        const operation = isRemoveOperation ? "remove" : "add";
        e.target.classList[operation]("error");
    }
}