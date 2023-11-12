import { html, render } from "../../../../node_modules/lit-html/lit-html.js";
import { towns } from "./towns.js";

const searchTemplate = (towns, match) => html`
<article>
        <div id="towns">
            <ul>
                ${towns.map(t => itemTemplate(t, match))}
            </ul>
        </div>
        <input type="text" id="searchText" />
        <button @click = ${search}>Search</button>
        <div id="result">${countMatches(towns, match)}</div>
    </article>
`;

const itemTemplate = (name, match) => html`
   <li class = ${(match && name.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${name}</li>
`

const main = document.body;
update();

// Работата на тази ф-я е да стартира темплейта (searchTemplate) и да рендерира полученият от темплейта резултат в бодито на документа
function update(match = '') {
   const result = searchTemplate(towns, match);
   render(result, main);
}

// Взимаме това, което се търси (въведеното в Search полето) и го подаваме на update функцията
function search() {

   const match = document.getElementById('searchText').value;
   update(match);
}

// Ф-я, която брои колко мача имаме.
function countMatches(towns, match) {
   const matches = towns.filter(t => match && t.toLowerCase().includes(match.toLowerCase())).length;
   return matches ? `${matches} matches found` : '';
}