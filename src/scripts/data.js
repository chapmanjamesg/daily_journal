// fetch("http://localhost:3000/entries")
//     .then(entries => entries.json())
//     .then(parsedEntries =>{
//         console.log(parsedEntries)
//         parsedEntries.forEach(entries => {
//             let addEntriesToDom = document.querySelector(".entryLog")
//             addEntriesToDom.innerHTML += makeJournalEntryComponent(entries)
//         });
//     })
import newJournalEntry from "./factory.js"
const API = {
    getJournalEntries() {
        console.log("getjournalentries")
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    saveJournalEntries() {
    
        fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(response)

        })
        .then(response => response.json())
    }
}
//you name the export the object you want to export
export default API;