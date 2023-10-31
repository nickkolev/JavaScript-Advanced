function solution() {

    const main = document.getElementById('main');
    const url = `http://localhost:3030/jsonstore/advanced/articles/list`;

    fetch(url)
        .then((res) => {
            if(res.status !== 200) {
                throw new Error('Wrong status code!');
            }

            return res.json();
        })
        .then((data) => {
            data.forEach(el => {
                
                let divAccordion = createElement('div', '', ['class', 'accordion']);
                let divHead = createElement('div', '', ['class', 'head']);
                let span = createElement('span', el.title);
                let button = createElement('button', 'More', ['class', 'button', 'id', el._id]);
                let divExtra = createElement('div', '', ['class', 'extra']);
                let p = createElement('p', '');

                button.addEventListener('click', toggle);

                divHead.appendChild(span);
                divHead.appendChild(button);

                divExtra.appendChild(p);

                divAccordion.appendChild(divHead);
                divAccordion.appendChild(divExtra);

                main.appendChild(divAccordion);
            });
        })
        .catch((err) => {
            console.log(err);
        })

        function toggle(e) {

            const accordion = e.target.parentNode.parentNode;
            const p = accordion.children[1].children[0];
            const extra = accordion.children[1];

            const id = e.target.id;
            const url = `http://localhost:3030/jsonstore/advanced/articles/details/${id}`;

            fetch(url)
                .then((res) => {
                    if(res.status !== 200) {
                        throw new Error('Wrong status code!');
                    }

                    return res.json();
                })
                .then((data) => {
                    p.textContent = data.content;

                    const hidden = e.target.textContent === 'More';

                    extra.style.display = hidden ? 'block' : 'none';
                    e.target.textContent = hidden ? 'Less' : 'More';
                })
        }

        function createElement(type, content, attributes = []) {

            const element = document.createElement(type);
    
            if(content) {
                element.textContent = content;
            }
    
            if(attributes.length > 0) {
                for(let i = 0; i < attributes.length; i+=2) {
                    element.setAttribute(attributes[i], attributes[i + 1]);
                }
            }
    
            return element;
        }
}

solution();