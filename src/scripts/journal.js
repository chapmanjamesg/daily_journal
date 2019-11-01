import API from "./data.js"
import journalIf from "./entriesDOM.js"
import newJournalEntry from "./factory.js"


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
 
        if (!date == null || !concept == null || !entry == null || mood == null){
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
export default saveToAPIEvent