export function isExternal(path) {
  return /^(https?:|mailto:|tel:|sms:)/.test(path)
}
