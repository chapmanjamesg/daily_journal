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
    // making the scroll to text
    const textMood = mood.options[mood.selectedIndex].text

    const inputArray = [date, concept, entry, mood]
 
    if (date.value, concept.value, entry.value, mood.value) {
            const newEntry = newJournalEntry.createJournalObject(date.value, concept.value, entry.value, textMood)
            API.saveJournalEntries(newEntry)
                //this is the later point that I had to call the api fetch
                .then(entries => getCall(entries))
            inputArray.forEach(inputField => {
                inputField.value = ""
            })
        
    } else {
        window.alert("I need you to help yourself and fill out me right!")
    }

})
export default saveToAPIEvent