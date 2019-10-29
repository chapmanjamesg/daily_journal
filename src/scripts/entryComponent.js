const makeJournal = {
    makeJournalEntryComponent: (render) => {
        return `
        <h2>${render.concept}</h2>
            <div>${render.date}</div>
            <aside>${render.entry}</aside>
            <aside>${render.mood}</aside>    
    `
    }
}

export default makeJournal;