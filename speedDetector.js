let speed = 80

function checkSpeed(speed) {
  let a = 5
  let speedlimit =70

  if (speed < 70){
  console.log('Ok')
  } else {
    let points = Math.floor((speed - 70) / 5)

    if(points > 12){
      console.log('License Suspended')
    } else {
      console.log(`Points: ${points}`)
    }
  }
}
checkSpeed(76)