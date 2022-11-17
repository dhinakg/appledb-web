const iosList = require('../../../../../grabData/ios')
const osStrArr = Array.from(new Set(iosList.map(x => x.osStr)))

let latestVersionArr = []
for (const bool of [true,false]) {
  for (const str of osStrArr)
  latestVersionArr.push({ osStr: str, beta: bool })

  for (const startsWith of ['11','12','13'])
  latestVersionArr.push({ osStr: 'macOS', beta: bool, startsWith: startsWith})

  for (const startsWith of ['8','9'])
  latestVersionArr.push({ osStr: 'watchOS', beta: bool, startsWith: startsWith})

  for (const os of ['iOS','tvOS','iPadOS','audioOS']) {
    latestVersionArr.push({ osStr: os, beta: bool, startsWith: '15'})
    latestVersionArr.push({ osStr: os, beta: bool, startsWith: '16'})
  }
}

latestVersionArr.push({ osStr: 'iOS', beta: false, startsWith: '12'})

const latestVersions = latestVersionArr
.map(x => iosList.filter(y => {
  const osStrCheck = y.hasOwnProperty('osStr') ? y.osStr == x.osStr : true
  const betaCheck = y.hasOwnProperty('beta') ? (y.beta || y.rc) == x.beta : true
  const hideCheck = y.hideFromLatestVersions
  const check = osStrCheck && betaCheck && !hideCheck && !y.rsr
  let startsWith = x.startsWith
  if (startsWith && y.version) {
    startsWith = y.version.startsWith(startsWith)
    return check && startsWith
  }
  return check
})
.filter(x => x.released)
.sort((a,b) => {
  const date = [a,b].map(x => new Date(x.released))
  if (date[0] < date[1]) return 1
  if (date[0] > date[1]) return -1
  return 0
})[0])
.filter(x => x)
.map(x => {
  if (!x.released) return x
  if (x.released.includes(' ')) return x

  const dateOffset = new Date().getTimezoneOffset() * 60 * 1000
  const currentDate = new Date(x.released).valueOf()
  const adjustedDate = new Date(currentDate + dateOffset)

  const releasedArr = x.released.split('-')
  const dateStyleArr = [{ year: 'numeric'}, { dateStyle: 'medium'}, { dateStyle: 'medium'}]
  x.released =  new Intl.DateTimeFormat('en-US', dateStyleArr[releasedArr.length-1]).format(adjustedDate)

  return x
})

module.exports = latestVersions