import API from "./data.js"
import journalIf from "./entriesDOM.js"

API.getJournalEntries()
//you needed to add the (entries) for it to actually get the info
    .then(entries => journalIf.renderJournalEntries(entries))