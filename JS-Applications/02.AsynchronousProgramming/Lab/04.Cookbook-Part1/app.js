const recipesURL = "http://localhost:3030/jsonstore/cookbook/recipes";

function loadRecipes() {
    fetch(recipesURL, {
        method: "GET",
    })
        .then((res) => {
            if (!res.status === 200) {
                throw new Error("Wrong status code");
            }

            return res.json();
        })
        .then((data) => {
            const loaderEl = document.querySelector("main > p");
            loaderEl.style.display = "none";

            Object.values(data).forEach((element) => {
                console.log(element);
                const article = document.createElement("article");
                const h2 = document.createElement("h2");
                h2.textContent = element.name;
                const div = document.createElement("div");
                div.classList.add("band");
                const innerDiv = document.createElement("div");
                innerDiv.classList.add("thumb");
                const img = document.createElement("img");

                img.setAttribute("src", element.img);
                innerDiv.appendChild(img);
                div.appendChild(innerDiv);
                article.appendChild(h2);
                article.appendChild(div);

                const main = document.querySelector("main");
                main.appendChild(article);

                article.addEventListener("click", () => {
                    const ingredientsURL = `http://localhost:3030/jsonstore/cookbook/details/${element._id}`;
                    fetch(ingredientsURL, { method: "GET" })
                        .then(res => {
                            if(res.status !== 200) {
                                throw new Error('Wrong status code');
                            }
                            return res.json();
                        })
                        .then((data) => { 

                            if(document.querySelector('.ingredients')) {
                                document.querySelector('.ingredients').remove();
                            }
                            const innerDivIngredients = document.createElement("div");
                            innerDivIngredients.classList.add('ingredients');
                            const h3 = document.createElement("h3");
                            h3.textContent = "Ingredients";
        
                            const ul = document.createElement("ul");
        
                            innerDivIngredients.appendChild(h3);
                            innerDivIngredients.appendChild(ul);
                            div.appendChild(innerDivIngredients);
        
                            data.ingredients.forEach((ingredient) => {
                                console.log(ingredient);
                                const li = document.createElement("li");
                                li.textContent = ingredient;
                                ul.appendChild(li);
                            });
                        })
                        .catch(error => {
                            console.log(error);
                        })
                });
            });
        })
        .catch((err) => console.log(err));
}

loadRecipes();

// window.addEventListener('load', () => {
//     recipes();
// });

// async function recipes() {
//     const main = document.querySelector('main');

//     try {
//         const url = 'http://localhost:3030/jsonstore/cookbook/recipes';  // The overview of the recipe (Title, Img)
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//         if (!response.ok) {
//             throw new Error(`Error ${response.status}!`);
//         }

//         document.querySelector('main > p').remove();  // Removes 'Loading...'

//         Object.values(data)
//             .map(info => {
//                 const articleElement = createElement('article', undefined, 'preview', main);

//                 const divElement = createElement('div', undefined, 'title', articleElement);
//                 const h2Element = createElement('h2', info.name, undefined, divElement);
//                 const div2Element = createElement('div', undefined, 'small', articleElement);
//                 const imgElement = createElement('img', undefined, undefined, div2Element);

//                 imgElement.setAttribute('src', info.img);

//                 articleElement.addEventListener('click', () => generateRecipe(info._id, articleElement)); // Click on a recipe
//             });

//     } catch (error) {
//         alert(error.message);
//     }
// }

// async function generateRecipe(id, targetRecipe) {
//     const url = `http://localhost:3030/jsonstore/cookbook/details/${id}`; // Inside the recipe, depending on the :id

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);

//         if (!response.ok) {
//             throw new Error(`Error ${response.status}!`);
//         }

//         const articleElement = createElement('article');

//         const h2Element = createElement('h2', data.name, undefined, articleElement);

//         const divElement = createElement('div', undefined, 'band', articleElement);
//         const div2Element = createElement('div', undefined, 'thumb', divElement);

//         const imgElement = createElement('img', undefined, undefined, div2Element);
//         imgElement.setAttribute('src', data.img);

//         const div3Element = createElement('div', undefined, 'ingredients', divElement);
//         const h3Element = createElement('h3', 'Ingredients', undefined, div3Element);

//         const ulElement = createElement('ul', undefined, undefined, div3Element);

//         Object.values(data.ingredients)   // Traverse through the given array
//             .map(ingredient => {
//                 const li = createElement('li', ingredient, undefined, ulElement)
//             });

//         const div4Element = createElement('div', undefined, 'description', articleElement);
//         const h3PreparationElement = createElement('h3', 'Preparation', undefined, div4Element);

//         Object.values(data.steps)
//             .map(step => {
//                 createElement('p', step, undefined, div4Element)
//             });

//         targetRecipe.replaceWith(articleElement);  // Replaces an Element with another

//     } catch (error) {
//         alert(error.message);
//     }
// }

// function createElement(type, textCon, className, parent) {
//     const element = document.createElement(type);

//     if (textCon) {
//         element.textContent = textCon;
//     }
//     if (className) {
//         element.className = className;
//     }
//     if (parent) {
//         parent.appendChild(element);
//     }

//     return element;
// }



/*
async function getRecipes() {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/recipes');
    const recipes = await response.json();

    return Object.values(recipes);
}

async function getRecipeById(id) {
    const response = await fetch('http://localhost:3030/jsonstore/cookbook/details/' + id);
    const recipe = await response.json();

    return recipe;
}

function createRecipePreview(recipe) {
    const result = e('article', { className: 'preview', onClick: toggleCard },
        e('div', { className: 'title' }, e('h2', {}, recipe.name)),
        e('div', { className: 'small' }, e('img', { src: recipe.img })),
    );

    return result;

    async function toggleCard() {
        const fullRecipe = await getRecipeById(recipe._id);

        result.replaceWith(createRecipeCard(fullRecipe));
    }
}

function createRecipeCard(recipe) {
    const result = e('article', {},
        e('h2', {}, recipe.name),
        e('div', { className: 'band' },
            e('div', { className: 'thumb' }, e('img', { src: recipe.img })),
            e('div', { className: 'ingredients' },
                e('h3', {}, 'Ingredients:'),
                e('ul', {}, recipe.ingredients.map(i => e('li', {}, i))),
            )
        ),
        e('div', { className: 'description' },
            e('h3', {}, 'Preparation:'),
            recipe.steps.map(s => e('p', {}, s))
        ),
    );

    return result;
}

window.addEventListener('load', async () => {
    const main = document.querySelector('main');

    const recipes = await getRecipes();
    const cards = recipes.map(createRecipePreview);

    main.innerHTML = '';
    cards.forEach(c => main.appendChild(c));
});

function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}
*/