// fetch("http://localhost:3000/entries")
//     .then(entries => entries.json())
//     .then(parsedEntries =>{
//         console.log(parsedEntries)
//         parsedEntries.forEach(entries => {
//             let addEntriesToDom = document.querySelector(".entryLog")
//             addEntriesToDom.innerHTML += makeJournalEntryComponent(entries)
//         });
//     })

 const API = {
     getJournalEntries () {
        return fetch("http://localhost:3000/entries")
             .then(response => response.json())
     }
 }