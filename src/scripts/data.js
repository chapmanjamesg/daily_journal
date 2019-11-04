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
    },
    //made this to filter through the moods, got to remember that the ? is the way that you search in a json fetch
    moodJournalEntry(moodFilter) {
        return fetch(`http://localhost:3000/entries?mood=${moodFilter}`)
        .then(response=> response.json())
    },
    deleteJournalEntries(entryToDelete) {
        return fetch(`http://localhost:3000/entries/${entryToDelete}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },

        })
        .then(response => response.json())
    }
}
//you name the export the object you want to export
export default API;