const data = [
  {
    x: 'A',
    value: 100,
    name: 'What you can be\nPAID FOR',
    normal: { fill: '#B4D7E0' },
  },
  {
    x: 'B',
    value: 100,
    name: 'What the world\nNEEDS',
    normal: { fill: '#FFBAB8' },
  },
  {
    x: 'C',
    value: 100,
    name: "What you're\nGOOD AT",
    normal: { fill: '#BFF7AE' },
  },
  {
    x: 'D',
    value: 100,
    name: 'What you\nLOVE',
    normal: { fill: '#f9eba7' },
  },
  {
    x: ['A', 'C'],
    value: 40,
    name: 'PROFESSION',
    normal: { fill: '#b3ddbe' },
  },
  {
    x: ['A', 'B'],
    value: 40,
    name: 'VOCATION',
    normal: { fill: '#E9B6B8' },
  },
  {
    x: ['C', 'D'],
    value: 40,
    name: 'PASSION',
    normal: { fill: '#DDF1AB' },
  },
  {
    x: ['B', 'D'],
    value: 40,
    name: 'MISSION',
    normal: { fill: '#ffcdba' },
  },
  {
    x: ['A', 'B', 'C'],
    value: 30,
    name: 'Comfortable,\nbut feeling of emptiness',
    normal: { fill: '#dccbc9' },
  },
  {
    x: ['B', 'C', 'D'],
    value: 30,
    name: 'Delight and fullness,\nbut no wealth',
    normal: { fill: '#EDE2AD' },
  },
  {
    x: ['A', 'B', 'D'],
    value: 30,
    name: 'Excitement and complacency,\nbut sense of uncertainty',
    normal: { fill: '#ECCEBE' },
  },
  {
    x: ['A', 'C', 'D'],
    value: 30,
    name: 'Satisfaction,\nbut feeling of uselessness',
    normal: { fill: '#ccdfa4' },
  },
  {
    x: ['A', 'B', 'C', 'D'],
    value: 100,
    name: 'Ikigai',
    normal: { fill: '#e8ede6' },
  },
]

function app() {
  const chart = anychart.venn(data)

  chart
    .background('#555')
    .labels()
    .fontSize(14)
    .fontColor('#222')
    .hAlign('center')
    .vAlign('center')
    .fontWeight('500')
    .format('{%Name}')

  chart.intersections().labels().fontSize(11).fontColor('#222')

  chart
    .title()
    .enabled(true)
    .useHtml(true)
    .text('Ikigai')
    .fontWeight('700')
    .fontColor('#ccc')

  chart.legend(false)

  // chart.tooltip().format('')
  // chart.tooltip().separator(false)

  chart.container('container')
  chart.draw()
}

anychart.onDocumentReady(app)
