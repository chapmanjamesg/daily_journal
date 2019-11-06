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
    // debugger
    const date = document.querySelector("#journalDate").value
    const concept = document.querySelector("#conceptsCovered").value
    const entry = document.querySelector("#journalEntry").value
    const mood = document.querySelector("#moodForTheDay").value

    const inputArray = [date, concept, entry, mood]


    const newEntry = newJournalEntry.createJournalObject(date, concept, entry, mood)
    API.saveJournalEntries(newEntry)
        //this is the later point that I had to call the api fetch
        .then(entries => getCall(entries))
    inputArray.forEach(inputField => {
        inputField = ""
    })



})
//wasn't letting me go fill in my info
// if (date === null || concept === null || entry === null || mood == null) {    } else {
//     window.alert("You need to fill me out you douche!")
// }
const filterEvents = document.getElementsByName("moodRadio")

filterEvents.forEach(radioButton => {
    radioButton.addEventListener("click", event => {
        const moodFilter = event.target.value
        // made a new array to filter through the json
        API.moodJournalEntry(moodFilter)
            .then(moodEntries => {
                const moodArray = moodEntries.filter(entry => entry.mood == moodFilter)
                // console.log(filteredArray)
                moodArray.innerHTML = ""
                journalIf.renderJournalEntries(moodArray)
                //was code used for a different approach, ended up not needing it
                // for(const entry of moodArray){
                //     // const journalHTML =makeJournal.makeJournalEntryComponent(entry)
                //     // console.log(journalHTML)
                // }
            })

    }
    )
})



const deleteEvent = document.querySelector(".entryLog")


deleteEvent.addEventListener("click", event => {
    if (event.target.id.startsWith("deleteJournalEntry--")) {
        const entryToDelete = event.target.id.split("--")[1]
        API.deleteJournalEntries(entryToDelete)
            .then(() => getCall())
    }
})
const editEvent = document.querySelector(".entryLog")
editEvent.addEventListener("click", event =>{
    
    const saveButtonHide = (event) => {
        let saveButton = document.querySelector("#saveJournalEntry")
        // console.log(saveButton.hidden)
        if (saveButton.hidden === true) {
            saveButton.removeAttribute("hidden")
        } else {
            saveButton.setAttribute("hidden", "hidden")
        }
    }
    const recordButtonHide = (event) => {
        let recordButton = document.querySelector("#recordJournalEntry")
        // console.log(recordButton.hidden)
        if (recordButton.hidden === true) {
            recordButton.removeAttribute("hidden")
        } else {
            recordButton.setAttribute("hidden", "hidden")
        }
    }
    recordButtonHide(event)
    saveButtonHide(event)
})


editEvent.addEventListener("click", event => {
    if (event.target.id.startsWith("editJournalEntry--")) {
        const entryToEdit = event.target.id.split("--")[1]
        updateFormFields(entryToEdit)
    }
})
const updateFormFields = entryId => {
    const hiddenEntryId = document.querySelector("#entryId")
    const DateInput = document.querySelector("#journalDate")
    const conceptInput = document.querySelector("#conceptsCovered")
    const entryInput = document.querySelector("#journalEntry")
    const moodInput = document.querySelector("#moodForTheDay")
    
    API.updateFormFetch(entryId)
    .then(entry => {
        // console.log(conceptInput)
        hiddenEntryId.value = entry.id
        conceptInput.value = entry.concept
        DateInput.value = entry.date
        entryInput.value = entry.entry
        moodInput.value = entry.mood
        // console.log(entry.mood)
    })
}

const saveEvent = document.querySelector("#saveJournalEntry")

saveEvent.addEventListener("click", event => {
    // console.log(entryId)
    const hiddenEntryId = document.querySelector("#entryId")
    if (hiddenEntryId.value !== "") {
        editEntry(entryId.value)
    } else {
        saveToAPIEvent()
    }
})

const editEntry = id =>{
    const updatedObject = {
        concept: document.querySelector("#conceptsCovered").value,
        date: document.querySelector("#journalDate").value,
        entry: document.querySelector("#journalEntry").value,
        mood: document.querySelector("#moodForTheDay").value
    }

    API.editJournalEntry(id, updatedObject)
    .then(entries=>{
        getCall(entries)
        document.querySelector("#entryId").value = ""
    })
}

export default saveToAPIEvent