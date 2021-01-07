const cloud

cloud.init({
  traceUser: true
})

exports.main = async (event, context) => {
  console.log('melons is called')
  return {
    melonId: 'asfjlsfah',
    title: '好瓜',
    content: '这是一个非常棒的瓜，这是一个非常棒的瓜，这是一个非常棒的瓜。',
    author: 'DP',
    visits: 1000,
    tag: '',
    level: 0,
    cost: 1
  }
}