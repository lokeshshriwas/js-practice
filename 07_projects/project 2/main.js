const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const results = document.querySelector("#results")
    const overview = document.querySelector('#overview')

    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = (`please enter a valid height ${height}`)
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = (`please enter a valid weight ${weight}`)
    } else {
        const bmi = parseFloat(weight / ((height * height)/10000)).toFixed(2)
        // console.log(bmi)
        results.innerHTML= `Your <b>BMI</b> is ${bmi}`
        if(bmi < 18.6 ){
            overview.innerHTML = "Your are under weight"
        } else if(bmi > 18.6 && bmi < 24.9  ){
            overview.innerHTML =" Your are in Normal range"
        } else if (bmi > 24.9 ){
            overview.innerHTML = "Your are Overweight"
        } 
    }
 
})