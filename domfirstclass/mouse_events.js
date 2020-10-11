// mouse events

const clearBtn = document.querySelector('.clear-tasks')
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click
// clearBtn.addEventListener('click', runEvent);
// doubleclick
// clearBtn.addEventListener('dblclick', runEvent);
// mousedown
// clearBtn.addEventListener('mousedown', runEvent);
// mouseup
// clearBtn.addEventListener('mouseup', runEvent);
// mouseenter
// clearBtn.addEventListener('mouseenter', runEvent);
// mouseleave
// clearBtn.addEventListener('mouseleave', runEvent);
// mouseover
// clearBtn.addEventListener('mouseover', runEvent);
// mouseout
// clearBtn.addEventListener('mouseout', runEvent);
// mousemove
card.addEventListener('mousemove', runEvent);



function runEvent(e){
    console.log(`Event type: ${e.type}`)

    heading.innerHTML = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`

    document.body.style.background = `rgb(${e.offsetX},${e.offsetY},40)`;
}
