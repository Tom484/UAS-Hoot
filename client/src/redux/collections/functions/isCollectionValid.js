export const isCollectionValid = collection => {
  let slides = Object.values(collection.slides)

  slides = slides.map((slide, i) => {
    return { ...slide, options: Object.values(slide.options) }
  })

  let isValid = true

  slides.forEach(slide => {
    if (!slide.question) {
      isValid = false
    }
  })

  slides.forEach(slide => {
    let correctAnswers = 0
    slide.options.forEach(option => {
      if (!option.option) {
        isValid = false
      }
      if (option.correct) {
        correctAnswers++
      }
    })
    console.log(correctAnswers)
    if (correctAnswers === 0) {
      isValid = false
    }
  })
  return isValid
}
