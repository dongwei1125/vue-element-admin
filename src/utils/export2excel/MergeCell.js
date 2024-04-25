/**
 * @param {Array} list
 * @param {Number} depth
 * @param {Number} maxDepth
 * @returns {Number}
 */
function getDepth(list = [], depth = 0, maxDepth = 0) {
  for (var i = 0; i < list.length; i++) {
    const item = list[i]

    if (item.children?.length) {
      maxDepth = getDepth(item.children, depth + 1, maxDepth)
    }
  }

  return Math.max(depth, maxDepth)
}

/**
 * @param {Array} list
 * @param {Number} length
 * @returns {Number}
 */
function getLength(list = [], length = 0) {
  for (var i = 0; i < list.length; i++) {
    const item = list[i]

    if (item.children?.length) {
      length = getLength(item.children, length)
    } else {
      length++
    }
  }

  return length
}

class MergeCell {
  constructor(list = []) {
    this.list = list

    this.getDepth()
    this.getLength()
    this.getMerges()
    this.getAoa()
    this.getProps()
  }

  getDepth() {
    this.depth = getDepth(this.list)
  }

  getLength() {
    this.length = getLength(this.list)
  }

  getMerges() {
    const maxRow = this.depth
    const merges = []

    /**
     * @param {Array} list
     * @param {Number} row
     * @param {Number} col
     * @returns {Number}
     */
    function generateMergedCell(list = [], row = 0, col = 0) {
      var merge,
        n = 0
      const length = list.length

      for (var i = 0; i < length; i++) {
        const item = list[i]

        if (item.children?.length) {
          const startCol = col + i + n
          const r = generateMergedCell(item.children, row + 1, startCol)

          n += r

          merge = { s: { r: row, c: startCol }, e: { r: row, c: col + i + n } }
        } else {
          merge = { s: { r: row, c: col + i + n }, e: { r: maxRow, c: col + i + n } }
        }

        item.merge = merge

        merges.push(merge)
      }

      return length - 1 + n
    }

    generateMergedCell(this.list)

    const isMerged = merge => merge.s.r !== merge.e.r || merge.s.c !== merge.e.c
    const mergeds = merges.filter(merge => isMerged(merge))

    this.merges = mergeds
  }

  getAoa() {
    const depth = this.depth
    const length = this.length
    const aoa = [...new Array(depth + 1)].map(_ => new Array(length).fill(''))

    /**
     * @param {Array} list
     */
    function generateAoa(list = []) {
      for (var i = 0; i < list.length; i++) {
        const item = list[i]
        const s = item.merge.s

        if (item.children?.length) {
          generateAoa(item.children)
        }

        aoa[s.r][s.c] = item.label
      }
    }

    generateAoa(this.list)

    this.aoa = aoa
  }

  getProps() {
    const props = []

    /**
     * @param {Array} list
     */
    function generateProp(list = []) {
      for (var i = 0; i < list.length; i++) {
        const item = list[i]

        if (item.children?.length) {
          generateProp(item.children)
        } else {
          props.push(item.prop)
        }
      }
    }

    generateProp(this.list)

    this.props = props
  }
}

export default MergeCell
