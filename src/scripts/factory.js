
const newJournalEntry = {
    createJournalObject: (date, concept, entry, mood) => {
        return {
            'date': date,
            'concept': concept,
            'entry': entry,
            'mood': mood
        }
    }
}
export default newJournalEntry

