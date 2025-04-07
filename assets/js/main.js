function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsClassName(".dropdown_content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction2() {
    document.getElementById("myDropdown_2").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn_2')) {
        var dropdowns = document.getElementsClassName(".dropdown_content_2");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function myFunction3() {
    document.getElementById("myDropdown_3").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn_3')) {
        var dropdowns = document.getElementsClassName(".dropdown_content_3");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const acc = document.getElementsByClassName("accordion");
    function active_acc(button, panel) {
        if (button.classList.contains("active")) {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
    }

    for (let i = 0; i < acc.length; i++) {
        var panel = acc[i].nextElementSibling;
        active_acc(acc[i], panel);
        acc[i].addEventListener('click', function () {
            for (let j = 0; j < acc.length; j++) {
                if (acc[j] !== this) {
                    acc[j].classList.remove("active");
                    acc[j].nextElementSibling.style.display = "none";
                }
            }
            this.classList.toggle("active");
            var upPanel = this.nextElementSibling;
            if (upPanel.style.display === "block") {
                upPanel.style.display = "none";
            } else {
                upPanel.style.display = "block";
            }
        });
    }
});