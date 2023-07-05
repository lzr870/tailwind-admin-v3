// 侧边栏会议纪要
export const renderMark = () => {
  return () => h('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    fill: 'none',
    viewBox: '0 0 24 24',
    stroke: 'currentColor',
    strokeWidth: '1.5',
    class: 'w-5 h-5'
  },[
    h('path', {
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      d: 'M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z'
    })
  ])
}









