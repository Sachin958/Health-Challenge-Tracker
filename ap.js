userData = [
    {
      id: 1,
      name: 'John Doe',
      workouts: [
        { type: 'Running', minutes: 30 },
        { type: 'Cycling', minutes: 45 }
      ]
    },
    {
      id: 2,
      name: 'Jane Smith',
      workouts: [
        { type: 'Swimming', minutes: 60 },
        { type: 'Running', minutes: 20 }
      ]
    },
    {
      id: 3,
      name: 'Mike Johnson',
      workouts: [
        { type: 'Yoga', minutes: 50 },
        { type: 'Cycling', minutes: 40 }
      ]
    },
 ]
const tbody = document.querySelector('tbody');
const username = document.getElementById('userName');
const workoutType = document.getElementById('workoutType');
const minutes = document.getElementById('workoutMinutes');
const submit = document.getElementById('submit');

const numberofworkout = function(name){
    // const name = userData.name;
    for(let i = 0 ; i < userData.length; i++){
        if(name === userData[i].name){
            return userData[i].workouts.length;
            // console.log(userData[i].workouts.length)
        }else{
            return 2;
        }
    }
}
// numberofworkout('Jane Smith')
// console.log(userData[1].name)
// console.log(userData[1].workouts.length)
// console.log(numberofworkout('Jane Smith'))



submit.addEventListener('click', function(event) {
    event.preventDefault()
    let count = numberofworkout(userData[1].name)
    tbody.innerHTML += ` 
    <tr>
        <td>${username.value}</td>
        <td>${workoutType.value}</td>
        <td>${count}</td>
        <td>${minutes.value}</td>
    </tr>`;
});

// submit.addEventListener('click', function() {
//     for(let i = 0 ; i < userData.length; i++){
//         tbody.innerHTML += ` 
//     <tr>
//         <td>${userData[i].name}</td>
//         <td>${userData[i].workouts[i].type}</td>
//         <td>${muserData[i].workouts[i].minutes}</td>
//         <td>${muserData[i].workouts[i].minutes}</td>
//     </tr>`;
//     }
// });




// search by name

const searchValue = document.getElementById('search')
searchValue.addEventListener('input', function() {
    const search = searchValue.value.toLowerCase();
    const filteredData = userData.filter(user => user.name.toLowerCase().includes(search));
    // console.log(filteredData[0].name)
     window.alert(` <tr>
        <td>${filteredData[0].name}</td>
        <td>${filteredData[0].workouts[0].type}</td>
        <td>${filteredData[0].workouts.length}</td>
        <td>${filteredData[0].workouts[0].minutes}</td>
    </tr>`) 
    
});



// Initial rendering of the table
// renderTable();




// progress

const userList = document.getElementById('userList');
const userName = document.getElementById('userName');
const ctx = document.getElementById('workoutChart').getContext('2d');
let chart;

function renderChart(workouts) {
    const labels = workouts.map(workout => workout.type);
    const data = workouts.map(workout => workout.minutes);

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Minutes',
                data: data,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

function updateUser(id) {
    const user = userData.find(user => user.id == id);
    if (user) {
        userName.textContent = `${user.name}'s workout progress`;
        renderChart(user.workouts);
    }
}

userList.addEventListener('click', function (e) {
    if (e.target.tagName === 'LI') {
        document.querySelectorAll('.sidebar ul li').forEach(li => li.classList.remove('active'));
        e.target.classList.add('active');
        updateUser(e.target.dataset.id);
    }
});

// Initialize with the first user's data
updateUser(1);