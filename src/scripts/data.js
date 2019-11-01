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
    getJournalEntries() {
        // console.log("getjournalentries")
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    },
    saveJournalEntries(newJournalEntry) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newJournalEntry)

        })
        .then(response => response.json())
    }
}
//you name the export the object you want to export
export default API;