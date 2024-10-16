document.addEventListener('DOMContentLoaded', function() {
    const pollForm = document.getElementById('pollForm');
    const optionsContainer = document.getElementById('optionsContainer');
    const addOptionBtn = document.getElementById('addOptionBtn');
    const pollDisplay = document.getElementById('pollDisplay');
    
    let optionCount = 2;

    // Function to add more options
    addOptionBtn.addEventListener('click', function() {
        optionCount++;
        const newOption = document.createElement('input');
        newOption.type = 'text';
        newOption.name = 'option';
        newOption.className = 'poll-option';
        newOption.placeholder = `Option ${optionCount}`;
        optionsContainer.appendChild(newOption);
    });

    // Handle poll form submission
    pollForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const pollTitle = document.getElementById('pollTitle').value;
        const options = document.querySelectorAll('.poll-option');
        const pollOptions = [];

        options.forEach(option => {
            if (option.value.trim()) {
                pollOptions.push(option.value.trim());
            }
        });

        // Display poll results dynamically
        displayPoll(pollTitle, pollOptions);
    });

    // Function to display the poll on the frontend
    function displayPoll(title, options) {
        pollDisplay.innerHTML = `
            <h2>${title}</h2>
            <div class="options-container">
                ${options.map(option => `<div class="poll-option">${option}</div>`).join('')}
            </div>
        `;
    }
});
