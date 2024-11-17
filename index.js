const menuIcon = document.querySelector('#menu-icon');
const navbar =   document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');


menuIcon.onclick = () => {
  menuIcon.classList.toogle('bx-x');
  navbar.classList.toogle('active');
}


const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


/*menuIcon.addEventListener('click', () => {
  menuIcon.classList.toogle('bx-x');
  navbar.classList.toogle('active');
})*/


/*menuIcon.onclick = () => {
  menuIcon.classList.toogle('bx-x');
  navbar.classList.toogle('active');
}*/






const activePage = () => {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
}

navLinks.forEach((link, idx) => {
  link.addEventListener('click', () => {
    if (!link.classList.contains('active')) {
      activePage();

      link.classList.add('active');
    }
  });
});

const skillBtns = document.querySelectorAll('.skill-btn');





skillBtns.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    skillBtns.forEach(btn => {
    btn.classList.remove('active');
    })
    btn.classList.add('active');
  });
});

// the project code ar here

const arrowRight = document.querySelector('.project-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.project-box .navigation .arrow-left');

let index = 0;

const activeProject = () => {
    const imgSlide = document.querySelector('.project-crousel .img-slide');
    const projectDetails = document.querySelectorAll('.project-detail');


    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index *2}rem))`;

    projectDetails.forEach(detail => {
    detail.classList.remove('active');
    });
    projectDetails[index].classList.add('active');
}

arrowRight.addEventListener('click', () => {
    if (index < 5) {
        index++;
        arrowLeft.classList.remove('disabled');

    } 
    else {
      index = 7;
      arrowRight.classList.add('disabled');
    }

    activeProject();
});

arrowLeft.addEventListener('click', () => {
    if (index > 1) {
        index--;
      arrowRight.classList.remove('disabled');

    } 
    else {
      index = 0;
      arrowLeft.classList.add('disabled');

    }

    activeProject();
})


// to there




 /*  window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' +  id  + ' ]').classList.add('active');
            })
        }
    })
}




menuIcon.click = () => {
    menuIcon.classList.toogle('bx-x');
    navbar.classList.toogle('active');
}*/