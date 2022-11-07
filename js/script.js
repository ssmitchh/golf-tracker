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

function addScore(){

    var newScore = new score(course, date, holes);

    scores.push(newScore);
}


// Gets course data to add to the new score object.
function getCourseData(course, score){
    var holes = [];


    let courseNameInput = course.toLowerCase();

     courses.forEach(function(element, index) {

        if (courseNameInput === element.courseName.toLowerCase()){

            var holesArray = courses.holes;

            holesArray.forEach(function(element, index){
                let holeNumber = element.holeNumber;
                let par = element.par;
                let dist = element.dist

                let hole = new holeObject(holeNumber, par, dist, score);
                holes.push(hole);


            })
           

        }
        
     });

     return holes;

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
});