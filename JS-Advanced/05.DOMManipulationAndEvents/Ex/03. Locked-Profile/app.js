function lockedProfile() {
    

    // capture elements
    const btnElements = Array.from(document.querySelectorAll('div button'));

    // attach event listener
    for (const btn of btnElements) {
        btn.addEventListener('click', showInfoHandler);
    }

    // on click functionality
    function showInfoHandler(e) {
        const divChildren = Array.from(e.target.parentElement.children);
        const isLocked = divChildren[2].checked;

        // if is locked - do nothing
        if(isLocked) {
            return;
        } else {
            // else - enable functionality
            const hiddenFieldElements = e.target.previousElementSibling;

            // toggling functionality
            if(e.target.textContent === 'Show more') {

                hiddenFieldElements.style.display = 'inline';
                e.target.textContent = 'Hide it'
                return;
            } else {
                
                hiddenFieldElements.style.display = '';
                e.target.textContent = 'Show more';
            }
        }
    }
}