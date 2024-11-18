const deadline = '2025-01-01 00:00:00'
let timer

const getTimeRemaining = (endpoint) => {
    const total = Date.parse(endpoint) - Date.parse(new Date())
    // console.log(total);
    const days = Math.floor(total / (1000 * 60 * 60 * 24))
    // console.log(days);
    const hours = Math.floor(total / (1000 * 60 * 60) % 24)
    // console.log(hours);
    const minutes = Math.floor(total / (1000 * 60) % 60)
    // console.log(minutes);
    const seconds = Math.floor(total / 1000 % 60)
    // console.log(seconds);

    return {
        total, days, hours, minutes, seconds
    }
}


const result = () => {
    const data = getTimeRemaining(deadline)

    document.querySelector('.timer__total').textContent = `Untill New Year: ${deadline}`;
    document.querySelector('.timer__days').textContent = `D: ${data.days}`;
    document.querySelector('.timer__hours').textContent = `H: ${data.hours}`;
    document.querySelector('.timer__minutes').textContent = `M: ${data.minutes}`;
    document.querySelector('.timer__seconds').textContent = `S: ${data.seconds}`;


    if (data.total === 0) {
        clearInterval(timer)
        alert('C новым годом!')
    }
}

timer = setInterval(result, 1000)









