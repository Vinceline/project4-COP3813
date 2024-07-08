function parseScores(scoresString) {
    return scoresString.split(" ");
 }
 
 function buildDistributionArray(scoresArray) {
    let distribution = [0, 0, 0, 0, 0];
 
    for (let score of scoresArray) {
       let numScore = Number(score);
       if (numScore >= 90) {
          distribution[0] += 1;
       } else if (numScore >= 80 && numScore <= 89) {
          distribution[1] += 1;
       } else if (numScore >= 70 && numScore <= 79) {
          distribution[2] += 1;
       } else if (numScore >= 60 && numScore <= 69) {
          distribution[3] += 1;
       } else {
          distribution[4] += 1;
       }
    }
 
    return distribution;
 }
 
 function setTableContent(userInput) {
    let scoresArray = parseScores(userInput);
    let distributionArray = buildDistributionArray(scoresArray);
 
    let firstRow = document.getElementById("first-row");
    let thirdRow = document.getElementById("third-row");
    let classNames = ['bar0', 'bar1', 'bar2', 'bar3', 'bar4'];
 
    let firstRowHTML = '';
    let thirdRowHTML = '';
 
    for (let i = 0; i < distributionArray.length; i++) {
       let height = distributionArray[i] * 10;
       firstRowHTML += `<td><div class="${classNames[i]}" style="height: ${height}px;"></div></td>`;
       thirdRowHTML += `<td>${distributionArray[i]}</td>`;
    }
 
    firstRow.innerHTML = firstRowHTML;
    thirdRow.innerHTML = thirdRowHTML;
 }
 
 // TODO: Change the arguments for testing purposes
 let ray = parseScores("91 63 18 4 97 71 84")
 console.log(ray)
 console.log(buildDistributionArray(["79", "91", "2", "64", "93", "82", "97", "82"]));
 let userInput = "85 92 88 78 65 99 73 54";
setTableContent(userInput);
