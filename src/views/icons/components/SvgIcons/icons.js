const req = require.context('@/icons/svg', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys()

const regexp = /\.\/(?<name>.*)\.svg/
const icons = requireAll(req).map(path => regexp.exec(path).groups.name)

export default icons
