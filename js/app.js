// MVP
// done - Create a form in HTML with inputs for relevant data.
// done - When the form is submitted, access the data from the form in the form’s submit event object.
// done - Create a list in HTML.
// done - Append the submitted data to the list.
// done - Add a “Delete All” <button> which clears all of the list items from the list.
// Note: If you are at all unclear about the process of reading and writing to the DOM,
//       complete the MVP, writing all the code in one function.
//       Understanding the document’s methods is the main learning for this homework.
//       Abstracting code into helper functions is secondary.
//
// Extensions:
// to do - Refactor code, extracting helper functions with single responsibilites
//                        to keep each function small and readable.
// Experiment with adding a new form input and experimenting with a new <input> type eg.
// Add a radio button input.
// Style your application with CSS
// Add any other extension functionality that you want!
document.addEventListener('DOMContentLoaded', () => {
    //logging to console javascript loaded
    console.log('JavaScript has loaded');
    //function that handles the form submittion
    if (sessionStorage.getItem("animeVids")){
    const inheritDivBox = document.getElementById("createdListings");
    inheritDivBox.innerHTML = sessionStorage.getItem('animeVids');
    };
    const form = document.querySelector('#form');
    form.addEventListener('submit', formHandler);

    const deleteBtn = document.querySelector('#deleteAllBtn');
    deleteBtn.addEventListener('click', deleteEverything);
});

const deleteEverything = function(event){

    const  getDivBox = document.querySelector("#createdListings");

    getDivBox.innerHTML = '';
    sessionStorage.clear();
    
}

const formHandler = function(event){
    event.preventDefault();
        console.log(event);

        const getDivBox = document.querySelector("#createdListings");

        const newItemBox = document.createElement("div");
        newItemBox.classList.add("createdItem");

        const newItemTitle = document.createElement("h3");
        newItemTitle.classList.add("itemTitle")
        newItemTitle.textContent = `${event.target.title.value}`;

        const newUnorderedList = document.createElement("ul");

        const newListItem = document.createElement("li");
        newListItem.textContent = `Released on ${event.target.releaseDate.value}`;
        newUnorderedList.appendChild(newListItem);

        const newItemOpening = document.createElement("iframe");
        newItemOpening.classList.add("songBox");
        convertLink = `${event.target.openingTheme.value}`;
        convertLink = convertLink.split("watch?v=");

        convertLink = convertLink[0].concat("embed/",convertLink[1]);
        console.log(convertLink);
        newItemOpening.src = `${convertLink}`;

        newItemBox.appendChild(newItemTitle);
        newItemBox.appendChild(newItemOpening);
        newItemBox.appendChild(newUnorderedList);
        
        getDivBox.appendChild(newItemBox);
        
        sessionStorage.setItem('animeVids', getDivBox.innerHTML);
        event.target.reset();
}
