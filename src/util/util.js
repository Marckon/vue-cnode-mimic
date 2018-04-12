const Util = {
  transferDate: function (dateStr) {
    let target = new Date(dateStr)
    let now = new Date()
    let diffYear = now.getFullYear() - target.getFullYear()
    if (diffYear > 0) {
      return diffYear + '年前'
    }
    let diffMonth = now.getMonth() - target.getMonth()
    if (diffMonth > 0) {
      return diffMonth + '月前'
    }
    let diffDate = now.getDate() - target.getDate()
    if (diffDate > 0) {
      return diffDate + '天前'
    }
    let diffHour = now.getHours() - target.getHours()
    if (diffHour > 0) {
      return diffHour + '小时前'
    }
    let diffMin = now.getMinutes() - target.getMinutes()
    if (diffMin > 0) {
      return diffMin + '分钟前'
    }
    let diffSec = now.getSeconds() - target.getSeconds()
    if (diffSec > 0) {
      return diffSec + '秒前'
    } else {
      return '刚刚'
    }
  },
  
}
export default {
  Util
}
