// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('Hello world');
//     e.preventDefault();
// })

// document.querySelector('.clear-tasks').addEventListener('click',onclick);
// function onclick(e){
    // console.log('clicked')

document.querySelector('.clear-tasks').addEventListener('mouseover',onclick);
function onclick(e){
    let val;
    val = e;
    val = e.target;
    val = e.target.id;
    val = e.target.className;
    val = e.target.classList;

    // event type
    val = e.type;

    // timestamp
    val = e.timeStamp;

    // coords event relative to window
    val = e.clientY;
    val = e.clientX;

    // coords event relative to the element
    val = e.offsetY
    val = e.offsetX;


    console.log(val);
}