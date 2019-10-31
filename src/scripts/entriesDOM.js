import makeJournal from "./entryComponent.js";

const journalIf = {
    renderJournalEntries: (entries) => {
        console.log("entriesdom")
        let entriesContainer = document.querySelector(".entryLog")
        console.log(entries)
        for (let i = 0; i < entries.length; i++) {
            let journalEntries = entries[i]
            entriesContainer.innerHTML += makeJournal.makeJournalEntryComponent(journalEntries)
            // console.log("hi")
        }
    }
}
export default journalIf;