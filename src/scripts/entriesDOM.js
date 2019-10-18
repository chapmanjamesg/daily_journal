const renderJournalEntries = (entries) => {
    let entriesContainer = document.querySelector(".entryLog")
    console.log(entries)
    for (let i = 0; i < entries.length; i++) {
        let journalEntries = entries[i]
        entriesContainer.innerHTML += makeJournalEntryComponent(journalEntries)
    }
}