function createRangeValue(){
  const value = document.querySelector('#value')
  const input = document.querySelector('#points')
  value.textContent = input.value
  input.addEventListener('input', (event) => {
  value.textContent = event.target.value
  })
}
createRangeValue()

function init(){
    const contactsForm = document.querySelector('#contacts-form')

    contactsForm.addEventListener('submit', (event) => {
        event.preventDefault()

        const personName = contactsForm.name.value
        const personSurname = contactsForm.surname.value
        const personAge = contactsForm.age.value
        const personTel = contactsForm.tel.value
        const personEmail = contactsForm.email.value
        const itPoints = contactsForm.points.value
        const studentsList = document.querySelector('#students-list')
        const studentItem = document.createElement('div')
        studentItem.classList.add('student-item')
        studentsList.prepend(studentItem)

        let fullNameH3 = document.createElement('h3')
        studentItem.append(fullNameH3)
        fullNameH3.textContent = `Full name: ${personName} ${personSurname}`

        let ageH3 = document.createElement('h3')
        studentItem.append(ageH3)
        ageH3.textContent = `Age: ${personAge}`

        let telH3 = document.createElement('h3')
        studentItem.append(telH3)
        telH3.textContent = `Tel. Nr.: ${personTel}`

        let emailH3 = document.createElement('h3')
        studentItem.append(emailH3)
        emailH3.textContent = `Email: ${personEmail}`

        let pointsH3 = document.createElement('h3')
        studentItem.append(pointsH3)
        pointsH3.textContent = `IT points: ${itPoints}`

    
        function checkPoints(){
          let points = document.getElementsByName('group-number')
          points.forEach((element) => {
          if (element.checked){
            let pointsTitle = document.createElement('h3')
            pointsTitle.textContent = `Group: ${element.value}`
            studentItem.append(pointsTitle)

          }
          })
        }
        checkPoints()

        function checkLanguage(){
          let languages = document.getElementsByName('language')
          let languageTitle = document.createElement('h3')
          studentItem.append(languageTitle)
            languageTitle.textContent = `Interested in: `

          let languageUL = document.createElement('ul')
          studentItem.append(languageUL)
  
          languages.forEach((element) => {
            if (element.checked){
              let languageList = document.createElement('li')
              languageUL.append(languageList)
              languageList.textContent = element.value

            }
          })
        }
        checkLanguage()

        function studentCreationText(){
          let creationText = document.createElement('span')
          creationText.textContent = `Student created successfully: ${personName} ${personSurname}. `
          studentItem.prepend(creationText)
          creationText.style = `color: green`
        }
        studentCreationText()

        setTimeout(() => {
          const item = document.querySelector('.student-item span')
          item.style = 'display: none'
        }, 5000);

        function createBtnShowHide(){
          let infoButton = document.createElement('button')
          infoButton.textContent = `Hide info.`
          studentItem.append(infoButton)

          infoButton.addEventListener('click', () => {
            if (infoButton.textContent === `Hide info.`){
              telH3.textContent = `Tel. Nr.: ********`
              emailH3.textContent = `Email: *********`
              infoButton.textContent = `Show info.`

            } else if (infoButton.textContent === `Show info.`){
              telH3.textContent = `Tel. Nr.: ${personTel}`
              emailH3.textContent = `Email: ${personEmail}`
              infoButton.textContent = `Hide info.`
            }
          })
        }
        createBtnShowHide()

        function createButtonDeleteStudent(){
          let btnDelete = document.createElement('button')
          studentItem.append(btnDelete)
          btnDelete.textContent = `Delete student`

          btnDelete.addEventListener('click', (event) => {
            studentItem.style.display = `none`

          let studentDeleteText = document.createElement('span')
          studentsList.prepend(studentDeleteText)
          studentDeleteText.textContent = `Student deleted successfully: ${personName} ${personSurname}`
          studentDeleteText.classList.add('deleted')
          studentDeleteText.style = `color: red`

          setTimeout(() => {
            const item = document.querySelector('#students-list .deleted')
            item.style = 'display: none'
          }, 5000);

          })



          
        }
        createButtonDeleteStudent()

      })
    }
    init()
    


