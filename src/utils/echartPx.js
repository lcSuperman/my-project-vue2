export function fontSize(px){
  let clientWidth = window.innerWidth || document.body.clientWidth // 获取屏幕尺寸
  if(!clientWidth){
    return 0 
  }
  let fontSize = clientWidth / 1920
  return px * fontSize
}