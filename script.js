const characters = [
    { name: "Rusdi Ngawi", percentage: 38 },
    { name: "Fuad Ngawi 46", percentage: 10 },
    { name: "Anggrek Mekar Pontianak", percentage: 10 },
    { name: "Faiz Mandalika", percentage: 10 },
    { name: "Jaki dashboard", percentage: 10 },
    { name: "Abim el-manuk", percentage: 10 },
    { name: "Fauzan Spion Kanan", percentage: 10 },
    { name: "Aping pecinta lelaki", percentage: 2 },
  ];
  
  function rollGacha() {
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = "";
  
    // Generate a random number between 0 and 100
    const randomNum = Math.random() * 100;
  
    // Determine which character the random number corresponds to
    let cumulativePercentage = 0;
    let chosenCharacter = null;
  
    for (let i = 0; i < characters.length; i++) {
      cumulativePercentage += characters[i].percentage;
  
      if (randomNum < cumulativePercentage) {
        chosenCharacter = characters[i].name;
        break;
      }
    }
  
    // Display the result
    const resultText = document.createTextNode(`Kamu dapat : ${chosenCharacter}`);
    resultElement.appendChild(resultText);
    alert(`Kamu dapat ${chosenCharacter}`)
    
  }
  
  const gachaButton = document.getElementById("gachaButton");
  gachaButton.addEventListener("click", rollGacha);
  