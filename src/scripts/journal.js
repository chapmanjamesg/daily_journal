import API from "./data.js"
import journalIf from "./entriesDOM.js"
import newJournalEntry from "./factory.js"
import makeJournal from "./entryComponent.js"



//had to make a function here so I can call it later
const getCall = () => {
    API.getJournalEntries()
        //you needed to add the (entries) for it to actually get the info
        .then(entries => journalIf.renderJournalEntries(entries))
}

// do not forget to call your function to print
getCall()

const saveToAPIEvent = document.getElementById("recordJournalEntry").addEventListener("click", event => {
    debugger
    const date = document.querySelector("#journalDate").value
    const concept = document.querySelector("#conceptsCovered").value
    const entry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#moodForTheDay").value

    const inputArray = [date, concept, entry, mood]

    if (!date == null || !concept == null || !entry == null || mood == null) {
        const newEntry = newJournalEntry.createJournalObject(date, concept, entry, mood)
        API.saveJournalEntries(newEntry)
            //this is the later point that I had to call the api fetch
            .then(entries => getCall(entries))
        inputArray.forEach(inputField => {
            inputField = ""
        })
    } else {
        window.alert("You need to fill me out you douche!")
    }


})

const filterEvents = document.getElementsByName("moodRadio")

filterEvents.forEach(radioButton => {
    radioButton.addEventListener("click", event => {
        const moodFilter = event.target.value
        API.getJournalEntries()
            .then(moodEntries => {
                const fileredArray = moodEntries.filter(entry=> entry.mood == moodFilter)
                console.log(fileredArray)
                for(const entry of fileredArray){
                    const journalHTML =makeJournal.makeJournalEntryComponent(entry)
                    fileredArray.innerHTML = ""
                    journalIf.renderJournalEntries(journalHTML)
                }
            })


    }
)})
export default saveToAPIEvent