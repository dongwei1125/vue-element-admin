export { default as http } from '@/api/httpInstance'

/**
 * @param {String} base64
 * @returns {File}
 */
export function base64ToFile(base64, filename) {
  const [prefix, content] = base64.split(',')
  const [_, mime] = prefix.match(/:(.*?);/)

  var bstr = window.atob(content),
    n = bstr.length,
    u8arr = new Uint8Array(n)

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }

  return new File([u8arr], filename, { type: mime })
}

/**
 * @param {Object} object
 * @returns {FormData}
 */
export function objectToFormData(object) {
  const keys = Object.keys(object)
  const formdata = new FormData()

  keys.forEach(key => {
    formdata.append(key, object[key])
  })

  return formdata
}
