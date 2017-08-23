const formatting = [
  { icon: 'B', type: 'bold' },
  { icon: 'I', type: 'italic' },
  { icon: 'S', type: 'strikethrough' },
  { icon: 'U', type: 'underline' },
  { icon: '< >', type: 'code' },
]

const styling = [{
  type: 'textColor',
  icon: 'A',
  values: ['#f88f23', '#f15047', '#82a43c', '#965ea0']
}]

export const markActions = { formatting, styling }
