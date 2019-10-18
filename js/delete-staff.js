var buttons = document.querySelectorAll('button')
var staffMembers = JSON.parse(localStorage.getItem('staff_data'))

// loop through all buttons and get the delete button id 
buttons.forEach(button=>{
    button.addEventListener('click', (event)=>{
        var targetDeleteButton = event.target
        var getDeleteAttribute = targetDeleteButton.getAttribute('delete-data')
        if(getDeleteAttribute === 'delete'){
            deleteStaff(targetDeleteButton.id - 1)
            console.log("delete", targetDeleteButton.id)
        }
    })
})

// delete specify member and update localStorage
function deleteStaff(staffMemberId){
    staffMembers.splice(staffMemberId, 1)
    console.log("Staff: ",staffMembers)
    localStorage.setItem('staff_data', JSON.stringify(staffMembers))
}

