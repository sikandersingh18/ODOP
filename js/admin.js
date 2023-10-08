document.addEventListener('DOMContentLoaded', function () {
    const notificationIcon = document.querySelector('.notification');
    const notificationPanel = document.querySelector('.notification-panel');

    // Function to toggle the visibility of the notification panel
    function toggleNotificationPanel() {
        if (notificationPanel.style.display === 'block') {
            notificationPanel.style.display = 'none';
        } else {
            notificationPanel.style.display = 'block';
        }
    }

    // Add a click event listener to the notification icon
    notificationIcon.addEventListener('click', function (e) {
        e.preventDefault();
        toggleNotificationPanel();
    });

    // Automatically hide the notification panel after 5 seconds
    setTimeout(function () {
        if (notificationPanel.style.display === 'block') {
            toggleNotificationPanel();
        }
    }, 1000); // 5000 milliseconds (5 seconds)
});

  
const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.remove('dark');
	}
})
  
const settingsMenu = document.getElementById("settings")
const clearPart = document.getElementById("content")
settingsMenu.addEventListener("click", function (event) {
	event.preventDefault();
	console.log("Settings link clicked.");
	clearPart.innerHTML = ""
	console.log("Content cleared.");
})