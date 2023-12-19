// REGISTER THE FLIP PLUGIN WITH GSAP
gsap.registerPlugin(Flip);

// SELECT ALL FIGURE ELEMENTS AND STORE THEM IN AN ARRAY
let dogs = gsap.utils.toArray("figure");

// INILIALIZE THE BIGDOG(THE IMAGE IN THE LARGE GRID SPACE) VARIABLE WITH THE FIRST FIGURE
let bigDog = dogs[0];

// ATTACH A CLICK EVENT LISTENER TO EACH FIGURE
dogs.forEach((dog) => {
  dog.addEventListener("click", (e) => changeGrid(dog));
});

// FUNCTION TO HANDLE THE GRID CHANGE AND FLIPPING ANIMATION
function changeGrid(dog) {
// IF THE CLICKED FIGURE IS THE SAME AS THE CURRENT BIGDOG, DO NOTHING
  if (dog === bigDog) return;

//   GET THE CURRENT STATE OF THE FIGURE USING GSAP FLIP
  let state = Flip.getState(dogs);

//   UPDATE DATA-GRID ATTRIBUTES OF THE FIGURE TO PERFORM THE SWAP
  bigDog.dataset.grid = dog.dataset.grid;
  dog.dataset.grid = "img-1";
  bigDog = dog;

//   USE GSAP FLIP TO ANIMATE THE FLIPPING TRANSITION
  Flip.from(state, {
    absolute: true,
    ease: 'Power1.inOut'
  })
}
