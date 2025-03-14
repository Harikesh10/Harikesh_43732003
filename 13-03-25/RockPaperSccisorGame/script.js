let score = !localStorage.getItem('score') ? {wins: 0, loses: 0, ties: 0}: JSON.parse(localStorage.getItem('score'))
let count = !localStorage.getItem('count') ? 0 : localStorage.getItem('count')

console.log(JSON.parse(localStorage.getItem('score')))
console.log(localStorage.getItem('count'))

let t1 = '',   t2 = ''

function play(key) {

    let yourChoice = key
    let computerChoice = getRandom()

if(t1 == ''){
        t1 = computerChoice
}
    else if (t1 == computerChoice && t2 == ''){
        t2 = computerChoice
    }
  else if(t1 == computerChoice && t2 == computerChoice){
        while(t1 == computerChoice){
            computerChoice = getRandom()
        }
    }
    else{
        t1 = ''
        t2 = ''
}


    if(count == 4) {
        let {wins, loses, ties} = score
          if (wins > loses){
            alert('BOOYAH You Win!')
        }
    else if(loses > wins){
            alert('BYE You Lose!')
        }
           else {
            alert('Oh its a Tie!')
        }
        localStorage.clear('score')
        localStorage.clear('count')
        update()
        return
    }

    let result = ''
    const obj1 = document.getElementById('your-choice')
    const obj2 = document.getElementById('computer-choice')

    if(yourChoice ==='Rock'){
        obj1.src = "./assets/rock.png"
    if(computerChoice === 'Paper'){
            obj2.src = "./assets/paper.png"
            result = 'Lose'
    }
        else if(computerChoice === 'Scissor'){
            obj2.src = "./assets/scissors.png"
            result = 'Win'
        }
    else{
            obj2.src = "./assets/rock.png"
            result="Tie"
        }
    }

else if(yourChoice === 'Paper'){
        obj1.src = "./assets/paper.png"
        if(computerChoice === 'Scissor'){
            obj2.src = "./assets/scissors.png"
            result = 'Lose'
        }
    else if(computerChoice === 'Rock'){
            obj2.src = "./assets/rock.png"
            result = 'Win'
        }
        else {
            obj2.src = "./assets/paper.png"
            result="Tie"
        }
    }

    else {
        obj1.src = "./assets/scissors.png"
        if(computerChoice === 'Rock'){
            obj2.src = "./assets/rock.png"
            result = 'Lose'
        }
        else if(computerChoice === 'Paper'){
            obj2.src = "./assets/paper.png"
            result = 'Win'
        }
        else {
            obj2.src = "./assets/scissors.png"
            result="Tie"
        }
    }

    (result === 'Win') ? score.wins++ : (result === 'Lose') ? score.loses++ : score.ties++
    count++

    document.getElementById('result').innerHTML = result
    const scores = document.getElementsByClassName('scores')
scores[0].innerHTML = `Wins : ${score.wins}`
    scores[1].innerHTML = `Loses : ${score.loses}`
    scores[2].innerHTML = `Ties : ${score.ties}`

    localStorage.setItem('score', JSON.stringify(score))
    localStorage.setItem('count', count)
}

function getRandom() {
    const i = Math.round(Math.random()*2)
    const computerChoice = ['Rock', 'Paper', 'Scissor']
    return computerChoice[i]
}

function resetGame() {
    localStorage.clear('score')
    alert('Game reseted successfully')
    update()
}

function update() {
score = (!localStorage.getItem('score')) ? {wins: 0, loses: 0, ties: 0}: JSON.parse(localStorage.getItem('score'))
    count = !localStorage.getItem('count') ? 0 : localStorage.getItem('count')

    document.getElementById('result').innerHTML = '-'
    const scores = document.getElementsByClassName('scores')
scores[0].innerHTML = `Wins : ${score.wins}`
    scores[1].innerHTML = `Loses : ${score.loses}`
    scores[2].innerHTML = `Ties : ${score.ties}`
}

update()
