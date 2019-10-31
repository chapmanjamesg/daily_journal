import makeJournal from "./entryComponent.js";

let journalEntries = ''
const journalIf = {
    renderJournalEntries: (entries) => {
        let entriesContainer = document.querySelector(".entryLog")
        // console.log("entriesdom")
        console.log(entries)
        entriesContainer.innerHTML = ''
        for (let i = 0; i < entries.length; i++) {
            journalEntries = entries[i]
            entriesContainer.innerHTML += makeJournal.makeJournalEntryComponent(journalEntries)
            // console.log("hi")
        }


    }
}
export default journalIf;   