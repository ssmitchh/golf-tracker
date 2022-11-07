// ============================================ ARRAYS ========================================================= //

const courses = [

    {
        courseName: "Hutt Park",
        holes: [
            {
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
        holes: [
            {
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
        holes: [
            {
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
    
]

// ============================================ OBJECTS ========================================================= //


function score(course, date, holes){
    this.course = course;
    this.date = date;
    this.holes = holes;

}

function holeObject(holeNumber, par, dist, score){
    this.holeNumber = holeNumber;
    this.par = par;
    this.dist = dist;
    this.score = score

}


// ============================================ FUNCTIONS ========================================================= //

function submitScore(){
    var courseName = document.getElementById("courseSelection").value;

    var scoreDate = document.getElementById("dateInput").value;
    console.log(scoreDate)

    var holes = [];

    // Adding the hole input data to an array

    if(courseName === "hutt park"){
        for(i = 0; i < 9; i++){

            var holeNumber = i+1;
            var holeName = "hole" + holeNumber + "input";
    
            var holeInput = document.getElementById(holeName);
            holes.push(holeInput.value)
    } } else {
        for(i = 0; i < 18; i++){
            var holeNumber = i+1;
            var holeName = "hole" + holeNumber + "input";
    
            var holeInput = document.getElementById(holeName);
            holes.push(holeInput.value)

    }


     
     }

     var scoresArray = getCourseData(courseName, holes);

     

     addScore(courseName, scoreDate, scoresArray)

}

function addScore(course, date, scoresArray){
    

    var newScore = new score(course, date, scoresArray);

    scores.push(newScore);
    console.log(newScore);
}


// Gets course data to add to the new score object.
function getCourseData(course, scores){


    let courseNameInput = course.toLowerCase();

    var scoresArray = [];

     courses.map(element => {

        if (courseNameInput === element.courseName.toLowerCase()){

            var holesArray = element.holes;
            console.log(holesArray)

            holesArray.forEach((individualHole, index) => {
                let {holeNumber, par, dist} = individualHole;
                
                let hole = new holeObject(holeNumber, par, dist, scores[index]);

                scoresArray.push(hole);

            });
           

        }
        
    
     });

     return scoresArray;


}

function filterByPar(){

}

function filterByCourse(){

}

function filterByHole(){

}

function filterByDate(){

}

function populateScoreCards(){

}

function populateScoreInput(){
    var courseName = document.getElementById("courseSelection")
}





// ============================================ FRONT END VISUALS ========================================================= //


var images = ['.img1', '.img2', '.img3'];
var bg = document.querySelector('.full');

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



bg.addEventListener("mouseenter", (event) => { dim(); });
bg.addEventListener("mouseleave", (event) => { unDim(); });

images.forEach((selector, i) => {
  var elem = document.querySelector(selector);
  ((i) => {
    elem.addEventListener("mouseenter", (event) => { dim(i); });
  })(i);
    elem.addEventListener("mouseleave", (event) => { unDim(); });
    
    (i);
});

document.getElementById("addScoreSelector").addEventListener("click", function () {
   var siteContentOverlay = document.getElementById("siteContentOverlay")
    var addScoreOverlay = document.getElementById("addScoreOverlay")
    siteContentOverlay.classList.remove("hidden")
    addScoreOverlay.classList.remove("hidden")
   
})


// ============================================ ON CLICKS ========================================================= /

document.getElementById("submitScore").addEventListener("click", submitScore)