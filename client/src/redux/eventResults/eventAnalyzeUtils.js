export function getEventQuizResults(optionsArray, answerArray) {
  const result = {}
  optionsArray.forEach((option, i) => (result[i] = { ...option, count: 0 }))
  answerArray.forEach(data => (result[data.option].count = result[data.option].count + 1))
  return result
}

export function getSlideScore(submitTime, slide, event, timeDifference) {
  console.log(event)
  return (
    (Math.round(
      Math.abs(submitTime - event.openVoteAt - slide.time.value * 1000 - timeDifference) *
        (500 / (slide.time.value * 1000))
    ) +
      500) *
    slide.points.value
  )
}

export function getUpdatedPlayers(playersArray, optionsArray, answers, slide, event) {
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
        lastDataUpdateSlideIndex: event.slideIndex,
      })
    }

    const slideScore = getSlideScore(answer.submitTime, slide, event, player.timeDifference)
    players[player.id] = {
      ...player,
      score: player.score + slideScore,
      lastScore: slideScore,
      consecutiveCorrectAnswers: player.consecutiveCorrectAnswers + 1,
      lastAnswer: true,
      lastDataUpdateSlideIndex: event.slideIndex,
    }
  })

  const sortedPlayers = Object.values(players).sort((a, b) => b.score - a.score)
  sortedPlayers.forEach((player, i) => (players[player.id].position = i + 1))

  return sortedPlayers
}
