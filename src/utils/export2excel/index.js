import * as XLSX from 'xlsx'
import MergeCell from './MergeCell'

/**
 * @param {Object | String} options
 */
export function tableToExcel(options) {
  const el = options.el || options
  const $table = typeof el === 'string' ? document.querySelector(el) : el

  const bookName = options.bookName || `book_${Date.now()}.xlsx`
  const sheetName = options.sheetName || `sheet_${Date.now()}`

  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.table_to_sheet($table)

  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)

  XLSX.writeFile(workbook, bookName)
}

/**
 * @param {Array} props
 * @param {Array} data
 * @returns {Array}
 */
function listToAoo(props = [], data = []) {
  const json = []

  for (var i = 0; i < data.length; i++) {
    const item = data[i]
    const values = []

    for (var j = 0; j < props.length; j++) {
      const key = props[j]

      values.push(item[key])
    }

    json.push(values)
  }

  return json
}

/**
 * @param {Object} options
 */
export function listToExcel(options) {
  const header = options.header || []
  const data = options.data || []
  const { aoa, merges, props, depth } = new MergeCell(header)
  const aoo = listToAoo(props, data)

  const sheetName = options.sheetName || `sheet_${Date.now()}`
  const bookName = options.bookName || `book_${Date.now()}.xlsx`

  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.aoa_to_sheet(aoa)

  worksheet['!merges'] = merges

  XLSX.utils.sheet_add_json(worksheet, aoo, { origin: `A${depth + 2}`, skipHeader: true })
  XLSX.utils.book_append_sheet(workbook, worksheet, sheetName)

  XLSX.writeFile(workbook, bookName)
}
