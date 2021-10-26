const position1 = { x: 0, y: 0 }
const position2 = { x: 0, y: 0 }
const position3 = { x: 0, y: 0 }
const position4 = { x: 0, y: 0 }
const position5 = { x: 0, y: 0 }
const position6 = { x: 0, y: 0 }
const position7 = { x: 0, y: 0 }
const position8 = { x: 0, y: 0 }
const position9 = { x: 0, y: 0 }
const position10 = { x: 0, y: 0 }
const position11 = { x: 0, y: 0 }
const position12 = { x: 0, y: 0 }

interact('.draggable-1').draggable({
listeners: {
  start (event) {
    console.log(event.type, event.target)
  },
  move (event) {
    position1.x += event.dx
    position1.y += event.dy

    event.target.style.transform =
      `translate(${position1.x}px, ${position1.y}px)`
  },
}
})
interact('.draggable-2').draggable({
listeners: {
  start (event) {
    console.log(event.type, event.target)
  },
  move (event) {
    position2.x += event.dx
    position2.y += event.dy

    event.target.style.transform =
      `translate(${position2.x}px, ${position2.y}px)`
  },
}
})
interact('.draggable-3').draggable({
listeners: {
  start (event) {
    console.log(event.type, event.target)
  },
  move (event) {
    position3.x += event.dx
    position3.y += event.dy

    event.target.style.transform =
      `translate(${position3.x}px, ${position3.y}px)`
  },
}
})
interact('.draggable-4').draggable({
    listeners: {
      start (event) {
        console.log(event.type, event.target)
      },
      move (event) {
        position4.x += event.dx
        position4.y += event.dy
    
        event.target.style.transform =
          `translate(${position4.x}px, ${position4.y}px)`
      },
}
})
interact('.draggable-5').draggable({
    listeners: {
    start (event) {
    console.log(event.type, event.target)
    },
    move (event) {
    position5.x += event.dx
    position5.y += event.dy

    event.target.style.transform =
    `translate(${position5.x}px, ${position5.y}px)`
    },
    }
})
interact('.draggable-6').draggable({
listeners: {
start (event) {
console.log(event.type, event.target)
},
move (event) {
position6.x += event.dx
position6.y += event.dy

event.target.style.transform =
`translate(${position6.x}px, ${position6.y}px)`
},
}
})
interact('.draggable-7').draggable({
listeners: {
start (event) {
console.log(event.type, event.target)
},
move (event) {
position7.x += event.dx
position7.y += event.dy

event.target.style.transform =
`translate(${position7.x}px, ${position7.y}px)`
},
}
})
interact('.draggable-8').draggable({
listeners: {
start (event) {
console.log(event.type, event.target)
},
move (event) {
position8.x += event.dx
position8.y += event.dy

event.target.style.transform =
`translate(${position8.x}px, ${position8.y}px)`
},
}
})
interact('.draggable-9').draggable({
listeners: {
start (event) {
console.log(event.type, event.target)
},
move (event) {
position9.x += event.dx
position9.y += event.dy

event.target.style.transform =
`translate(${position9.x}px, ${position9.y}px)`
},
}
})
interact('.draggable-10').draggable({
listeners: {
start (event) {
console.log(event.type, event.target)
},
move (event) {
position10.x += event.dx
position10.y += event.dy

event.target.style.transform =
`translate(${position10.x}px, ${position10.y}px)`
},
}
})
interact('.draggable-11').draggable({
listeners: {
start (event) {
console.log(event.type, event.target)
},
move (event) {
position11.x += event.dx
position11.y += event.dy

event.target.style.transform =
    `translate(${position11.x}px, ${position11.y}px)`
},
}
})
interact('.draggable-12').draggable({
listeners: {
    start (event) {
    console.log(event.type, event.target)
    },
    move (event) {
    position12.x += event.dx
    position12.y += event.dy

    event.target.style.transform =
        `translate(${position12.x}px, ${position12.y}px)`
    },
}
})