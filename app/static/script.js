const now = new Date()

const greetingText = document.getElementById('greeting')

const user = "aaa123"

const toggleBtn = document.getElementById('toggle-btn')
const sidebar = document.getElementById('sidebar')

const uploadBtn = document.getElementById('uploadBtn')

uploadBtn.addEventListener('click', ()=>{
    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = '.csv'

    
})

function toggleSidebar(){
    sidebar.classList.toggle('close')
}

if(now.getHours() < 12) {
    greetingText.innerHTML = `Good Morning, ${user}!`

} else if(now.getHours() < 18) {
    greetingText.innerHTML = `Good Afternoon, ${user}!`
} else {
    greetingText.innerHTML = `Good Evening, ${user}!`
}

function toggleSubmenu(){
    const submenu = document.querySelector('.submenu')
    submenu.classList.toggle('show')
    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close')
    }
}

function initGrid(){
    // prefer the visible ag-grid container id 'myGrid', fall back to 'transactionsCont'
    const gridElement = document.getElementById('myGrid') || document.getElementById('transactionsCont')
    if(!gridElement) return

    // ensure agGrid library is loaded; retry a few times if not yet available
    if(typeof agGrid === 'undefined'){
        window._agGridRetry = (window._agGridRetry || 0) + 1
        if(window._agGridRetry <= 10){
            return setTimeout(initGrid, 150)
        }
        return
    }

    const gridOptions = {
        columnDefs: [
            {field: "TransactionID"},
            {field: "Date"},
            {field: "Type"},
            {field: "Category"},
            {field: "Description"},
            {field: "Amount"},
        ],
        defaultColDef: {
            sortable: true,
            filter: true,
            flex: 1,
            minWidth: 100,
            editable: true,
        }, pagination: true,
        rowData: Array.isArray(window.transactions) ? window.transactions : []
    }
    // ensure the container has the ag-theme class
    if(!gridElement.classList.contains('ag-theme-quartz')){
        gridElement.classList.add('ag-theme-quartz')
    }
    const gridApi = agGrid.createGrid(gridElement, gridOptions)
}

// function 

document.addEventListener('DOMContentLoaded', initGrid)