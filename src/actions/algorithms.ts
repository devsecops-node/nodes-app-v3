const findInsideString = (info: string, findLeter: string) => {
  const splitInfo = info.split('')
  const splitFindLeter = findLeter.split('')
  let newArray = []

  for (let i = 0; i < splitInfo.length; i++) {
    if (newArray.length === splitFindLeter.length) {
      console.log(newArray)
      newArray.shift()

    } else {
      console.log(info[i])
      newArray.push(info[i])
      console.log(newArray)
    }
  }

}

findInsideString('acide', "cia")