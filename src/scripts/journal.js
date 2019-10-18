const makeJournalEntryComponent = (entries) => {
    return `
        <h2>${entries.concept}</h2>
            <div>${entries.date}</div>
            <aside>${entries.entry}</aside>
            <aside>${entries.mood}</aside>    
    `
}

const renderJournalEntries = (entries) => {
    let entriesContainer = document.querySelector(".entryLog")

    for (let i = 0; i < journalEntry.length; i++) {
        entries = journalEntry[i]
        entriesContainer.innerHTML += makeJournalEntryComponent(entries)
    }
}
fetch("http://localhost:3000/entries")
    .then(entries => entries.json())
    .then(parsedEntries =>{
        console.log(parsedEntries)
        parsedEntries.forEach(entries => {
            let addEntriesToDom = document.querySelector(".entryLog")
            addEntriesToDom.innerHTML += makeJournalEntryComponent(entries)
        });
    })
renderJournalEntries(journalEntry)


console.log(journalEntry)