import { saveAs } from 'file-saver'
import JSZip from 'jszip'

/**
 * @param {Array} header
 * @param {Array} data
 * @returns {String}
 */
function listTostring(header = [], data = []) {
  const br = '\r\n'
  var string = header.map(e => e.label) + br

  for (var i = 0; i < data.length; i++) {
    string += header.map(e => data[i][e.prop]) + br
  }

  return string
}

/**
 * @param {Object} options
 */
export async function listToZip(options) {
  const header = options.header || []
  const data = options.data || []
  const txtName = options.txtName || Date.now()
  const zipName = options.zipName || Date.now()

  const zip = new JSZip()
  const string = listTostring(header, data)

  zip.file(`${txtName}.txt`, string)

  const blob = await zip.generateAsync({ type: 'blob' })

  saveAs(blob, `${zipName}.zip`)
}
