const journalEntry = [
    {
        date: '10-14-19',
        concept: 'building DOM Components',
        entry: 'Today we learned to manipulate the DOM using JAVASCRIPT. later in the day we went over JSON',
        mood: 'glad'
    }
];

journalEntry.push({ date: '10-11-19', concept: 'objects as things', entry: 'today we went over how to manipulate objects in javascript', mood: 'confused' });
journalEntry.push({ date: '10-10-19', concept: 'functions and logic', entry: 'today we went over using functions and methods in javascript', mood: 'glad' });

const makeJournalEntryComponent = (journalEntry) => {
    return `
        <h2>${journalEntry.concept}</h2>
            <div>${journalEntry.date}</div>
            <aside>${journalEntry.entry}</aside>
            <aside>${journalEntry.mood}</aside>    
    `
}

const renderJournalEntries = (entries) => {
    let entriesContainer = document.querySelector(".entryLog")

    for (let i = 0; i < journalEntry.length; i++) {
        entries = journalEntry[i]
        entriesContainer.innerHTML += makeJournalEntryComponent(entries)
    }
}

renderJournalEntries(journalEntry)


console.log(journalEntry)