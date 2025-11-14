const aboutMain = document.getElementById('aboutMain');
const myInfo = {
        Name: "Tansukh",
        Class: "11",
        Level: "80",
    }

const myInfoArray = Object.keys(myInfo)
console.log('my info', myInfo["Class"])
aboutMain.innerHTML  = myInfoArray.map((info) =>  `
<div>
<lable>${info} :</label>
<input 
           type="text" 
           name="info" 
           class="wi" 
           readonly
           value=${myInfo[info]}
           />
           </div>
           `)