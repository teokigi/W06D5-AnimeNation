// MVP
// Create a form in HTML with inputs for relevant data - done
// When the form is submitted, access the data from the form in the form’s submit event object - done
// Create a list in HTML - to do
// Append the submitted data to the list - to do
// Add a “Delete All” <button> which clears all of the list items from the list - done
// Note: If you are at all unclear about the process of reading and writing to the DOM, complete the MVP, writing all the code in one function. Understanding the document’s methods is the main learning for this homework. Abstracting code into helper functions is secondary.
//
// Extensions
// Refactor your code, extracting helper functions with single responsibilites to keep each function small and readable
// Experiment with adding a new form input and experimenting with a new <input> type eg. Add a radio button input
// Style your application with CSS
// Add any other extension functionality that you want!
document.addEventListener('DOMContentLoaded', () => {
    //logging to console javascript loaded
    console.log('JavaScript has loaded');
    //function that handles the form submittion
    const form = document.querySelector('#form');
    form.addEventListener('submit', formHandler);

    const deleteBtn = document.querySelector('#deleteAllBtn');
    deleteBtn.addEventListener('click', deleteEverything);
});

const deleteEverything = function(event){

    const  getDivBox = document.querySelector("#createdListings");

    getDivBox.innerHTML = '';
    
}

const formHandler = function(event){
    event.preventDefault();
        console.log(event);

        const getDivBox = document.querySelector("#createdListings");

        const newItemBox = document.createElement("div");
        newItemBox.classList.add("createdItem");

        const newItemTitle = document.createElement("p");
        newItemTitle.classList.add("itemTitle")
        newItemTitle.textContent = `${event.target.title.value}`;

        const newUnorderedList = document.createElement("ul");

        const newListItem = document.createElement("li");
        newListItem.textContent = `Released on ${event.target.releaseDate.value}`;
        newUnorderedList.appendChild(newListItem);

        const newItemOpening = document.createElement("iframe");
        newItemOpening.classList.add("songBox");
        convertLink = `${event.target.openingTheme.value}`;
        //https://www.youtube.com/watch?v=z-wpXShTUfY
        convertLink = convertLink.split("watch?v=");

        convertLink = convertLink[0].concat("embed/",convertLink[1]);
        console.log(convertLink);
        newItemOpening.src = `${convertLink}`;

        newItemBox.appendChild(newItemTitle);
        newItemBox.appendChild(newItemOpening);
        newItemBox.appendChild(newUnorderedList);
        
        getDivBox.appendChild(newItemBox);

        event.target.reset();
}
