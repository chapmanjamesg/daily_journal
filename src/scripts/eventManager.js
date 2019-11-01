// import newJournalEntry from "./factory"
// export const saveToAPIEvent = document.getElementById("recordJournalEntry").addEventListener("click", event => {
//     debugger
//     const date = document.querySelector("#journalDate").value
//     const concept = document.querySelector("#conceptsCovered").value
//     const entry = document.querySelector("#journalEntry").value
//     const mood = document.querySelector("#moodForTheDay").value

//     const inputArray = [date, concept, entry, mood]
 
//         if (!date == null || !concept == null || !entry == null || mood == null){
//             const newEntry = newJournalEntry.createJournalObject(date, concept, entry, mood)
//             API.saveJournalEntries(newEntry)
//                 //this is the later point that I had to call the api fetch
//                 .then(entries => getCall(entries))
//             inputArray.forEach(inputField => {
//                 inputField = ""
//             })
//         } else {
//             window.alert("You need to fill me out you douche!")
//         }
  

// })