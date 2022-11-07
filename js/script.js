// ============================================ ARRAYS ========================================================= //


// resize 



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
    var courseName = document.getElementById("courseSelection");
    var holeInputs = document.getElementById("holeInputs");

    if (courseName.value === "hutt park"){
        

        holeInputs.innerHTML =  `
        <div class="holes-side1">
        <div class="hole-input-group">
            <label for="hole1input">Hole 1</label>
            <input type="number" class="hole-input" id="hole1input" min="1">
        </div>

        <div class="hole-input-group">
            <label for="hole1input">Hole 2</label>
            <input type="number" class="hole-input" id="hole2input" min="1"></div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 3</label>
            <input type="number" id="hole3input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 4</label>
            <input type="number" id="hole4input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 5</label>
             <input type="number" id="hole5input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 6</label>
            <input type="number" id="hole6input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 7</label>
             <input type="number" id="hole7input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 8</label>
            <input type="number" id="hole8input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 9
            </label>
            <input type="number" id="hole9input" class="hole-input" min="1">
        </div>


        
        
        
       
        
        
    </div>
    
    </div>

   
        
        `
    } else {
        holeInputs.innerHTML = `
        <div class="holes-side1">
        <div class="hole-input-group">
            <label for="hole1input">Hole 1</label>
            <input type="number" class="hole-input" id="hole1input" min="1">
        </div>

        <div class="hole-input-group">
            <label for="hole1input">Hole 2</label>
            <input type="number" class="hole-input" id="hole2input" min="1"></div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 3</label>
            <input type="number" id="hole3input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 4</label>
            <input type="number" id="hole4input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 5</label>
             <input type="number" id="hole5input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 6</label>
            <input type="number" id="hole6input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 7</label>
             <input type="number" id="hole7input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 8</label>
            <input type="number" id="hole8input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole1input">Hole 9
            </label>
            <input type="number" id="hole9input" class="hole-input" min="1">
        </div>


        
        
        
       
        
        
    </div>
    <div class="holes-side2 ">
         <div class="hole-input-group">
            <label for="hole10input">Hole 10</label>
            <input type="number" class="hole-input" id="hole10input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole11input">Hole 11
            </label>
            <input type="number" id="hole11input" class="hole-input" min="1">
        </div>

        <div class="hole-input-group">
            <label for="hole12input">Hole 12</label>
            <input type="number" class="hole-input" id="hole12input" min="1"></div>
        <div class="hole-input-group">
            <label for="hole13input">Hole 13</label>
            <input type="number" id="hole13input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole14input">Hole 14</label>
            <input type="number" id="hole14input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole15input">Hole 15</label>
             <input type="number" id="hole15input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole16input">Hole 16</label>
            <input type="number" id="hole16input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole17input">Hole 17</label>
             <input type="number" id="hole17input" class="hole-input" min="1">
        </div>
        <div class="hole-input-group">
            <label for="hole18input">Hole 18</label>
            <input type="number" id="hole18input" class="hole-input" min="1">
        </div>
        
    </div>

   
    
        `
    }
   
}





// ============================================ FRONT END VISUALS ========================================================= //


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
    elem.addEventListener("mouseenter", (event) => { dim(i); });
  })(i);
  elem.addEventListener("mouseleave", (event) => { unDim(); });
});

document.getElementById("addScoreSelector").addEventListener("click", function () {
   var siteContentOverlay = document.getElementById("siteContentOverlay")
    var addScoreOverlay = document.getElementById("addScoreOverlay")
    siteContentOverlay.classList.remove("hidden")
    addScoreOverlay.classList.remove("hidden")
   populateScoreInput();
})


// ============================================ ON CLICKS ========================================================= /

document.getElementById("submitScore").addEventListener("click", submitScore)