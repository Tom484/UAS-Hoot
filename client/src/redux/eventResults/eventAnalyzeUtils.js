export function getEventQuizResults(optionsArray, answerArray) {
  const result = {}
  optionsArray.forEach((option, i) => (result[i] = { ...option, count: 0 }))
  answerArray.forEach(data => (result[data.option].count = result[data.option].count + 1))
  return result
}

export function getSlideScore(submitTime, slide, eventt) {
  return (
    Math.round(
      Math.abs(submitTime - eventt.openVoteAt - slide.time.value * 1000) *
        (500 / (slide.time.value * 1000))
    ) + 500
  )
}

export function getUpdatedPlayers(playersArray, optionsArray, answers, slide, eventt) {
  const players = {}
  playersArray.forEach((player, i) => {
    const answer = answers?.[player.id] || null
    let correct = false
    if (answer) correct = optionsArray[answer.option].correct

    if (!answer || !correct) {
      return (players[player.id] = {
        ...player,
        consecutiveCorrectAnswers: 0,
        lastScore: 0,
        lastAnswer: false,
        lastDataUpdateSlideIndex: eventt.slideIndex,
      })
    }

    const slideScore = getSlideScore(answer.submitTime, slide, eventt)
    players[player.id] = {
      ...player,
      score: player.score + slideScore,
      lastScore: slideScore,
      consecutiveCorrectAnswers: player.consecutiveCorrectAnswers + 1,
      lastAnswer: true,
      lastDataUpdateSlideIndex: eventt.slideIndex,
    }
  })

  const playersValue = Object.values(players).sort((a, b) => b.score - a.score)
  playersValue.forEach((player, i) => (players[player.id].position = i + 1))

  return players
}
