// const players = [
//   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
//   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
//   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
// ]

// const playerNames = players.map(({ id, name }) => ({ id, name }))
// console.log('playerNames', playerNames)

// const updatedPioints = players.map(player => ({ ...player, points: player.points * 2 }))

// console.log('updatedPioints', updatedPioints)

// /*
//  * Увеличиваем кол-во часов игрока 'Kiwi' по id
//  */

// const playerIdToUpdate = 'player-3'

// // const updatedPlayers = players.map(player => {
// //   if (playerIdToUpdate === player.id) {
// //     return {
// //       ...player,
// //       timePlayed: player.timePlayed + 100,
// //     }
// //   }
// //   return player
// // })

// // Та же запись тернарником:
// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id ? { ...player, timePlayed: player.timePlayed + 100 } : player,
// )

// console.table(players)
// console.table(updatedPlayers)

// -----------------------------------------------------------------------------

/*
 * Собираем все теги из твитов
 */
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ]

// const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], [])
// console.log(allTags)

/*
 * Ведём статистику тегов
 */

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

//   if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// const tagsStats = allTags.reduce((acc, tag) => {
//   return {
//     ...acc,
//     [tag]: acc[tag] ? acc[tag] + 1 : 1,
//   }
// }, {})
// console.log(tagsStats)

// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1

// -----------------------------------------------------------------------------
