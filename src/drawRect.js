export function drawRect(svg) {
  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
  rect.setAttribute('x', 0)
  rect.setAttribute('y', 0)

  rect.setAttribute('fill', '#000000')

  rect.setAttribute('width', 100)
  rect.setAttribute('height', 100)
  svg.appendChild(rect)
}
