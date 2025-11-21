const aboutMain = document.getElementById('aboutMain');
const infoSection = document.getElementById('infoSection');
const skillsSection = document.getElementById('skillsSection');
const myInfo = {
        Name: "Tansukh",
        Class: "11",
        Level: "80",  
    }
    const myKnowledge = {
        JavaScript: "https://www.w3schools.com/js/img_javascript_480.jpg",
        HTML: "https://www.w3schools.com/images/html5.gif",
        CSS: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
        Figma: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
        "React.js": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
        "Tailwind CSS": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s",
        Git: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
        "Node.js": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIoQh9KhmY5RfgyzS1OEk--Tqp6V9vQjfCtA&s",
    }

const myInfoArray = Object.keys(myInfo)
console.log('my info', myInfo["Class"])
infoSection.innerHTML  = myInfoArray.map((info) =>  `
<div class="info-item">
<lable>${info} :</label>
<input 
           type="text" 
           name="info" 
           class="wi inputText" 
           readonly
           value=${myInfo[info]}
           />
           </div>
           `).join('');

for (const skill in myKnowledge) {
    const skillDiv = document.createElement('div');
    skillDiv.classList.add('skill-div');
    const img = document.createElement('img');
    img.src = myKnowledge[skill];
    img.alt = skill;
    img.classList.add('skill-icon');
    const title = document.createElement('span');
    title.textContent = skill;
    title.classList.add('skill-title');
    skillDiv.appendChild(img);
    skillDiv.appendChild(title);
    skillsSection.appendChild(skillDiv);
}