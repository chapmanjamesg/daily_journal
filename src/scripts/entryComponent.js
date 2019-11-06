const makeJournal = {
    makeJournalEntryComponent: (entries) => {
        return `
        <h2 id="entries--${entries.id}">${entries.concept}</h2>
            <div>Date: ${entries.date}</div>
            <aside>${entries.entry}</aside>
            <aside>The Mood: ${entries.mood}</aside>  
            <button type="delete" id="deleteJournalEntry--${entries.id}">Delete</button> 
            <button type="edit" id="editJournalEntry--${entries.id}">Edit</button>
    `
    }
}

export default makeJournal;