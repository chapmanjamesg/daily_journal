const makeJournal = {
    makeJournalEntryComponent: (entries) => {
        return `
        <h2>${entries.concept}</h2>
            <div>Date: ${entries.date}</div>
            <aside>${entries.entry}</aside>
            <aside>The Mood: ${entries.mood}</aside>    
    `
    }
}

export default makeJournal;