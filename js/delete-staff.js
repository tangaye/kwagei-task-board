var buttons = document.querySelectorAll('button')
var staffMembers = JSON.parse(localStorage.getItem('staff_data'))

buttons.forEach(button=>{
    button.addEventListener('click', (event)=>{
        var targetDeleteButton = event.target
        var getDeleteAttribute = targetDeleteButton.getAttribute('delete-data')
        if(getDeleteAttribute === 'delete'){
            deleteStaff(targetDeleteButton.id)
            console.log("delete", targetDeleteButton.id)
        }
    })
})

function deleteStaff(staffMemberId){
    staffMembers.splice(staffMemberId, 1)

    localStorage.setItem()
}

