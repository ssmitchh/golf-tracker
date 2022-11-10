// ============================================ ARRAYS ========================================================= //


// resize 

const courses = [

    {
        courseName: "Hutt Park",
        holes: [{
                holeNumber: 1,
                par: 3,
                dist: 128
            },
            {
                holeNumber: 2,
                par: 4,
                dist: 225
            },
            {
                holeNumber: 3,
                par: 3,
                dist: 105
            },
            {
                holeNumber: 4,
                par: 4,
                dist: 335
            },
            {
                holeNumber: 5,
                par: 3,
                dist: 102
            },
            {
                holeNumber: 6,
                par: 4,
                dist: 240
            },
            {
                holeNumber: 7,
                par: 3,
                dist: 137
            },
            {
                holeNumber: 8,
                par: 3,
                dist: 178
            },
            {
                holeNumber: 9,
                par: 3,
                dist: 113
            }
        ]
    },
    {
        courseName: "Shandon",
        holes: [{
                holeNumber: 1,
                par: 5,
                dist: 405
            },
            {
                holeNumber: 2,
                par: 4,
                dist: 320
            },
            {
                holeNumber: 3,
                par: 3,
                dist: 137
            },
            {
                holeNumber: 4,
                par: 4,
                dist: 242
            },
            {
                holeNumber: 5,
                par: 5,
                dist: 356
            },
            {
                holeNumber: 6,
                par: 4,
                dist: 316
            },
            {
                holeNumber: 7,
                par: 3,
                dist: 166
            },
            {
                holeNumber: 8,
                par: 5,
                dist: 395
            },
            {
                holeNumber: 9,
                par: 3,
                dist: 130
            },
            {
                holeNumber: 10,
                par: 4,
                dist: 338
            },
            {
                holeNumber: 11,
                par: 4,
                dist: 338
            },
            {
                holeNumber: 12,
                par: 4,
                dist: 351
            },
            {
                holeNumber: 13,
                par: 5,
                dist: 360
            },
            {
                holeNumber: 14,
                par: 3,
                dist: 137
            },
            {
                holeNumber: 15,
                par: 5,
                dist: 419
            },
            {
                holeNumber: 16,
                par: 4,
                dist: 274
            },
            {
                holeNumber: 17,
                par: 5,
                dist: 332
            },
            {
                holeNumber: 18,
                par: 4,
                dist: 343
            },
        ]
    },
    {
        courseName: "Trentham",
        holes: [{
                holeNumber: 1,
                par: 5,
                dist: 458
            },
            {
                holeNumber: 2,
                par: 4,
                dist: 257
            },
            {
                holeNumber: 3,
                par: 3,
                dist: 116
            },
            {
                holeNumber: 4,
                par: 4,
                dist: 268
            },
            {
                holeNumber: 5,
                par: 3,
                dist: 163
            },
            {
                holeNumber: 6,
                par: 4,
                dist: 254
            },
            {
                holeNumber: 7,
                par: 5,
                dist: 476
            },
            {
                holeNumber: 8,
                par: 3,
                dist: 117
            },
            {
                holeNumber: 9,
                par: 5,
                dist: 422
            },
            {
                holeNumber: 10,
                par: 4,
                dist: 253
            },
            {
                holeNumber: 11,
                par: 3,
                dist: 160
            },
            {
                holeNumber: 12,
                par: 4,
                dist: 276
            },
            {
                holeNumber: 13,
                par: 5,
                dist: 175
            },
            {
                holeNumber: 14,
                par: 5,
                dist: 459
            },
            {
                holeNumber: 15,
                par: 4,
                dist: 282
            },
            {
                holeNumber: 16,
                par: 4,
                dist: 297
            },
            {
                holeNumber: 17,
                par: 4,
                dist: 298
            },
            {
                holeNumber: 18,
                par: 4,
                dist: 264
            }
        ]
    }


]



let scores = [
    // {
    //     course: ,
    //     date: ,
    //     holes: [
    //         {
    //             holeNumber: ,
    //             par: ,
    //             dist: ,
    //             score: 
    //         },
    //          {
    //             holeNumber: ,
    //             par: ,
    //             dist: ,
    //             score: 
    //         }
    //     ]
    // }

]

// ============================================ OBJECTS ========================================================= //


function score(course, date, holes) {
    this.course = course;
    this.date = date;
    this.holes = holes;

}

function holeObject(holeNumber, par, dist, score) {
    this.holeNumber = holeNumber;
    this.par = par;
    this.dist = dist;
    this.score = score

}


// ============================================ ADD SCORE FUNCTIONS ========================================================= //

function formCheck() {
    console.log("reached form check function");
    var courseName = document.getElementById("courseSelection")
    console.log(courseName.value);
    var error = false;
    var inputData = [];

    if (courseName.value === "hutt park") {
        for (i = 0; i < 9; i++) {
            console.log("in for loop hutt park");
            var inputId = "hole" + (i + 1) + "input";
            var inputValue = document.getElementById(inputId).value;

            inputData.push(inputValue);

        }
    } else {
        for (i = 0; i < 18; i++) {
            var inputId = "hole" + (i + 1) + "input";
            console.log(inputId);
            var inputValue = document.getElementById(inputId).value;
            inputData.push(inputValue);

        }
    }




    for (i = 0; i < inputData.length; i++) {



        if (inputData[i].value === '') {
            // throw error
            alert("Please make sure you have entered a score for every hole")
            populateScoreInput();
            error = true;
            break;
        }

        if (!error) {
            submitScore();
        }

    }




}


function submitScore() {
    var courseName = document.getElementById("courseSelection").value;

    var scoreDate = document.getElementById("dateInput").value ? document.getElementById("dateInput").value : new Date().toISOString().slice(0, 10);
    console.log(scoreDate)

    var holes = [];

    // Adding the hole input data to an array

    if (courseName === "hutt park") {
        for (i = 0; i < 9; i++) {

            var holeNumber = i + 1;
            var holeName = "hole" + holeNumber + "input";

            var holeInput = document.getElementById(holeName);
            holes.push(holeInput.value)
        }
    } else {
        for (i = 0; i < 18; i++) {
            var holeNumber = i + 1;
            var holeName = "hole" + holeNumber + "input";

            var holeInput = document.getElementById(holeName);
            holes.push(holeInput.value)

        }



    }

    var scoresArray = getCourseData(courseName, holes);



    addScore(courseName, scoreDate, scoresArray);
    submitSuccess();

}

function submitSuccess() {
    alert("Your score has been added")
    console.log(scores);


}

function addScore(course, date, scoresArray) {


    var newScore = new score(course, date, scoresArray);

    scores.push(newScore);
    console.log(newScore);
}


// Gets course data to add to the new score object.
function getCourseData(course, scores) {


    let courseNameInput = course.toLowerCase();

    var scoresArray = [];

    courses.map(element => {

        if (courseNameInput === element.courseName.toLowerCase()) {

            var holesArray = element.holes;
            console.log(holesArray)

            holesArray.forEach((individualHole, index) => {
                let {
                    holeNumber,
                    par,
                    dist
                } = individualHole;

                let hole = new holeObject(holeNumber, par, dist, scores[index]);

                scoresArray.push(hole);

            });


        }


    });

    return scoresArray;


}




// ============================================ CHECK SCORE FUNCTIONS ========================================================= //

var selectedCourse = "all";
var selectedHole = "all"
var selectedPar = "all"
var filteredScores = [];
var dataType;

// function getPar(currentScore) {
//     let res = [];

//     let {
//         course,
//         date
//     } = currentScore;
//     res.push([course, date, currentScore.holes.filter(el => {
//         if (el.par === Number(selectedPar)) {
//             return el
//         }
//     })])

//     return res
// }

// function getCourse(currentScore) {
//     let res = [];


//     let {
//         course,
//         date
//     } = currentScore;
//     res.push([course, date, currentScore.filter(el => {
//         if (el.par === Number(selectedPar)) {
//             return el
//         }
//     })])

//     return res
// }

// function getHole(currentScore) {
//     let res = [];

//     let {
//         course,
//         date
//     } = currentScore;
//     res.push([course, date, currentScore.holes.filter(el => {
//         if (el.holeNumber === Number(selectedHole)) {
//             return el
//         }
//     })])
//     return res
// }

function filterDecision() {

    filteredScores = [];
    dataType = ''


    console.log("filter change starts here");

    // scores.forEach((element, index) => {

        var currentScore
        var courseName
        var date
        var holeNumber;
        var par;
        var dist;
        var score;
        var holes

    scores.forEach(card => {
        currentScore = card;
            courseName = card.course;
            date = card.date;
            holes = card.holes;

            holes.forEach(hole => {

                holeNumber = hole.holeNumber;
                par = hole.par;
                dist = hole.dist;
                score = hole.score
                filter(courseName, holeNumber, par, currentScore, date, hole);
            })
        })
    // })

    let removeDuplicates = (filteredScores) => {
        return [...new Set(filteredScores)];
    }

    filteredScores = removeDuplicates(filteredScores)

    console.table(filteredScores);

    if (dataType === 'card') {
        card()
        
    } else if (dataType === 'table') {
        table()
        
    }




}

function filter(courseName, holeNumber, par, currentScore, date, hole) {


    console.log(courseName, holeNumber, par);
    console.log("reached function");
    console.log(holeNumber, selectedHole);
    selectedHole = (selectedHole === NaN || selectedHole === 'all') ? 'all' : Number(selectedHole);
    selectedPar = (selectedPar === NaN || selectedPar === 'all') ? 'all' : Number(selectedPar);

    if (selectedCourse === "all" && selectedHole === "all" && selectedPar === "all") {

        filteredScores = scores;
        dataType = 'card'


    }
    // show just course selected - all holes all pars
    if (selectedCourse === courseName && selectedHole === "all" && selectedPar === "all") {
        // cards
        console.log('showing course')
        filteredScores.push(currentScore);

        dataType = 'card'



    } // show just hole selected - all course all par
    if (selectedCourse === "all" && selectedHole === holeNumber && selectedPar === "all") {
        // table
        console.log("showing hole: ", holeNumber);


        filteredScores.push({
            courseName,
            date,
            hole
        })

        dataType = 'table'

    } // show just par selected - all course all holes
    if (selectedCourse === "all" && selectedHole === "all" && selectedPar === par) {
        // table
        console.log("showing par: ", par);
        filteredScores.push({
            courseName,
            date,
            hole
        })

        dataType = 'table'

    }
    // show result for course and par --  no hole selected
    if (selectedCourse === courseName && selectedPar === par && selectedHole == "all") {
        // table
        console.log('showing course and par: ', courseName, par)
        filteredScores.push({
            courseName,
            date,
            hole
        })

        dataType = 'table'
    }
    // show result for course and hole number -- no par selected
    if (selectedCourse === courseName && selectedHole === holeNumber && selectedPar === "all") {
        // table
        console.log('showing course and hole: ', courseName, holeNumber)
        filteredScores.push({
            courseName,
            date,
            hole
        })

        dataType = 'table'

    }



}


function table() {
    var scoreCardContainer = document.getElementById("scoreCardContainer")

    scoreCardContainer.innerHTML = ``
    

    scoreCardContainer.innerHTML = `
     <div class="score-table" id="scoreTable">
     <div class="table-date card-item top">DATE</div>
                    <div class="table-hole card-item top">HOLE</div>
                    <div class="table-score card-item top">SCORE</div>
                    <div class="table-par card-item top">PAR</div>
                    <div class="table-dist card-item top">DIST</div>

                    </div>
    `


    filteredScores.forEach(element => {

        var scoreTable = document.getElementById("scoreTable")

        scoreTable.innerHTML += `
        <div class="table-course card-item">${element.courseName.toUpperCase()}</div>
        <div class="table-date card-item">${element.date}</div>
          <div class="table-hole card-item">${element.hole.holeNumber}</div>
                    
                    <div class="table-score card-item">${element.hole.score}</div>
                    <div class="table-par card-item">${element.hole.par}</div>
                    <div class="table-dist card-item">${element.hole.dist}</div>
        `

    })
    
}




function card() {
    scoreCardContainer.innerHTML = ``
    

    filteredScores.forEach((element, index) => {
        var course = element.course.toUpperCase();
        createScoreCard(course, index);

        var scores = element.holes;

        scores.forEach(element => {

            populateScores(element.par, element.holeNumber, element.score, element.dist, index)

        })

    })

}

function createScoreCard(course, index) {
    var scoreCardContainer = document.getElementById("scoreCardContainer")

    scoreCardContainer.innerHTML += `
    <div class="score-card" id = 'scoreCard${index}'>

                    
       <div class="card-title card-item">${course}</div>
        <div class="card-total card-item">TOTAL</div>
        <div class="card-total-number card-item"></div>
                    
                    
        <div class="card-hole card-item">HOLE</div>
        <div class="card-score card-item">SCORE</div>
        <div class="card-par card-item">PAR</div>
        <div class="card-dist card-item">DIST</div>
                        
                        
                </div>
    `
}



function populateScores(par, hole, score, dist, index) {

    var innerScoreCard = document.getElementById(`scoreCard${index}`);
    innerScoreCard.innerHTML += `
    <div class="card-hole card-item"> ${hole}</div>
    <div class="card-score card-item">${score}</div>
    <div class="card-par card-item">${par}</div>
    <div class="card-dist card-item">${dist}</div>

    
    
    `






};

// Functions to populate dropdown menus

function populateParSelector() {
    var parSelector = document.getElementById("filterPar");


    var parList = [];

    if (selectedCourse === "all") {
        courses.forEach(element => {
            var courseHoles = element.holes;


            courseHoles.forEach(element => {
                var par = element.par;

                if (!(parList.includes(par))) {
                    parList.push(par);
                }
            })
        })

    } else {
        courses.forEach(element => {
            if (element.courseName.toLowerCase() === selectedCourse) {
                var courseHoles = element.holes;
                courseHoles.forEach(element => {
                    var par = element.par;

                    if (!(parList.includes(par))) {
                        parList.push(par);
                    }
                })

            }

        })
    }

    if (!(selectedHole === "all")) {

        parSelector.disabled = true;
        selectedPar = "all"

        parList.forEach(element => {
            parSelector.innerHTML += `<option disabled value="${element}">${element}</option> `
        })

    } else {
        parSelector.disabled = false;
        console.log(selectedHole);
        parSelector.innerHTML = `<option value="all">All pars</option>`
        parList.forEach(element => {
            parSelector.innerHTML += `<option value="${element}">${element}</option> `
        })
    }



};

function populateHoleList() {
    var holeSelector = document.getElementById("filterHole");
    holeSelector.innerHTML = `<option value="all">All holes</option>`

    if (selectedCourse === "hutt park" && selectedPar === "all") {
        holeSelector.disabled = false;
        for (i = 1; i < 10; i++) {
            holeSelector.innerHTML += `<option value="${i}">${i}</option>`

        }
    } else if (selectedPar === "all") {
        holeSelector.disabled = false;
        for (i = 1; i < 19; i++) {
            holeSelector.innerHTML += `<option value="${i}">${i}</option>`

        }


    } else if (!selectedPar == "all") {
        holeSelector.disabled = true;
        selectedHole = "all"
    }



}





// ============================================ FRONT END VISUALS ========================================================= //

var navMap = document.getElementById("navMap")
var siteContentOverlay = document.getElementById("siteContentOverlay")
var addScoreOverlay = document.getElementById("addScoreOverlay")
var checkScoreOverlay = document.getElementById("checkScoreOverlay")



var images = ['.img1', '.img2', '.img3'];
var bg = document.querySelector('.nav-map');

function dim(index) {
    bg.classList.add('full--dim');
    images.forEach((selector, i) => {
        var elem = document.querySelector(selector);
        if (index >= 0 && index === i) {
            elem.classList.remove('partial--vanish');
        } else {
            elem.classList.add('partial--vanish');
        }
    });
}

function unDim() {
    bg.classList.remove('full--dim');
    images.forEach((selector) => {
        var elem = document.querySelector(selector);
        elem.classList.remove('partial--vanish');
    });
}

// bg.addEventListener("mouseenter", (event) => { dim(); });
// bg.addEventListener("mouseleave", (event) => { unDim(); });
images.forEach((selector, i) => {
    var elem = document.querySelector(selector);
    ((i) => {
        elem.addEventListener("mouseenter", (event) => {
            dim(i);
        });
    })(i);
    elem.addEventListener("mouseleave", (event) => {
        unDim();
    });
});




// ============================================ ON CLICKS ========================================================= /
// Open add score page
document.getElementById("addScoreSelector").addEventListener("click", function () {
    var pageTitle = document.getElementById("pageTitleAddScore")

    siteContentOverlay.classList.remove("hidden")
    addScoreOverlay.classList.remove("hidden")
    // navMap.classList.remove('hidden')
    navMap.style.animation = "backgroundShiftBigAddScore 3s";
    navMap.style.transform = "scale(4)";
    navMap.style.transformOrigin = "top";
    navMap.style.left = "70vw"
    pageTitle.style.animation = "open-page-title 3s"

    // populateScoreInput();

})



// Open check score page
document.getElementById("checkScoreSelector").addEventListener("click", function () {
    var pageTitle = document.getElementById("pageTitleCheckScore")

    siteContentOverlay.classList.remove("hidden")
    checkScoreOverlay.classList.remove("hidden")

    navMap.style.animation = "backgroundShiftBigCheckScore 3s";
    navMap.style.transform = "scale(4.8)";
    navMap.style.transformOrigin = "top";
    navMap.style.top = "-70vh"
    navMap.style.left = "-10vw"
    pageTitle.style.animation = "open-page-title 2s"

    populateParSelector();
    populateHoleList();
    filterDecision()

})

// Back buttons
document.querySelectorAll('.backButton').forEach(item => {
    item.addEventListener('click', event => {

        var targetDiv = event.target.parentElement.parentElement;
        console.log(targetDiv);
        var divId = targetDiv.id;
        siteContentOverlay.classList.toggle("hidden")
        targetDiv.classList.add("hidden")

        if (divId === "addScoreOverlay") {
            console.log("in if statement");
            navMap.style.animation = "backgroundShiftSmallAddScore 3s";
            navMap.style.transform = "scale(1.6)";
            navMap.style.transformOrigin = "top";
            navMap.style.left = "30vw"

        } else if (divId === "checkScoreOverlay") {
            navMap.style.animation = "backgroundShiftSmallCheckScore 3s";
            navMap.style.transform = "scale(1.6)";
            navMap.style.transformOrigin = "top";
            navMap.style.left = "30vw"
            navMap.style.top = "5vh"

        }




    });
});

// **** Add score page clicks and changes ****

var addScoreCourseSelector = document.getElementById("courseSelection");
addScoreCourseSelector.addEventListener("change", function () {
    if (addScoreCourseSelector.value === "shandon" || addScoreCourseSelector.value === "trentham") {
        document.getElementById("holesSide2").classList.remove("hidden")
    } else {
        document.getElementById("holesSide2").classList.add("hidden")
    }
})

document.getElementById("submitScore").addEventListener("click", formCheck);

// **** Check score page clicks and changes ****
var courseFilter = document.getElementById("filterCourse");
courseFilter.addEventListener('change', function () {
    selectedCourse = courseFilter.value;
    console.log(selectedCourse);

    populateParSelector();
    populateHoleList();
    filterDecision();
    console.log('course filter func end')
})
var holeFilter = document.getElementById("filterHole");
holeFilter.addEventListener('change', function () {
    selectedHole = holeFilter.value;
    populateParSelector();

    filterDecision()


    console.log(selectedHole);

})

var parFilter = document.getElementById("filterPar");
parFilter.addEventListener('change', function () {
    selectedPar = parFilter.value;

    populateHoleList();
    filterDecision()




})