const makeJournalEntryComponent = (entries) => {
    return `
        <h2>${entries.concept}</h2>
            <div>${entries.date}</div>
            <aside>${entries.entry}</aside>
            <aside>${entries.mood}</aside>    
    `
}
