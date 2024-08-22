export default {
  login: {
    title: 'System Login',
    login: 'Login',
    username: 'Username',
    password: 'Password',
    inputUsername: 'Please input user name',
    inputPassword: 'Please input password',
    passwordMinLength: 'The length is 6 bits at least',
  },
  route: {
    dashboard: 'Dashboard',
    document: 'Document',
    guide: 'Guide',
    permission: 'Permission',
    pagePermission: 'Page Permission',
    directivePermission: 'Directive Permission',
    rolePermission: 'Role Permission',
    icons: 'Icons',
    component: 'Component',
    tinymce: 'Tinymce',
    markdown: 'Markdown',
    jsonEditor: 'JSON Editor',
    splitPane: 'SplitPane',
    avatarUpload: 'Avatar Upload',
    dropzone: 'Dropzone',
    sticky: 'Sticky',
    countTo: 'Count To',
    componentMixin: 'Mixin',
    backToTop: 'Back To Top',
    dragDialog: 'Drag Dialog',
    dragSelect: 'Drag Select',
    dndList: 'Dnd List',
    dragKanban: 'Drag Kanban',
    chart: 'Chart',
    keyboardChart: 'Keyboard Chart',
    lineChart: 'Line Chart',
    mixChart: 'Mix Chart',
    nested: 'Nested',
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
    table: 'Table',
    dynamicTable: 'Dynamic Table',
    dragTable: 'Drag Table',
    inlineEditTable: 'Inline Edit Table',
    complexTable: 'Complex Table',
    example: 'Example',
    createArticle: 'Create Article',
    editArticle: 'Edit Article',
    articleList: 'Article List',
    tab: 'Tab',
    error: 'Error Page',
    error401: '401',
    error404: '404',
    errorLog: 'Error Log',
    excel: 'Excel',
    exportExcel: 'Export Excel',
    exportSelectedExcel: 'Export Selected Excel',
    exportMergeHeaderExcel: 'Export Merge Header Excel',
    uploadExcel: 'Upload Excel',
    zip: 'Zip',
    exportZip: 'Export Zip',
    pdf: 'PDF',
    theme: 'Theme',
    clipboard: 'Clipboard',
    i18n: 'I18n',
    link: 'External Link',
  },
  size: {
    title: 'Element Size',
    default: 'Default',
    medium: 'Medium',
    small: 'Small',
    mini: 'Mini',
  },
  navbar: {
    profile: 'Profile',
    updatePassword: 'Update Password',
    logOut: 'Log Out',
  },
  avatar: {
    title: 'Tips',
    tips: 'Please confirm that you are exiting the system?',
    confirmButtonText: 'Confirm',
    cancelButtonText: 'Cancel',
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All',
  },
  settings: {
    title: 'Page Style',
    theme: 'Theme Color',
    sidebar: 'Sidebar',
    sidebarLogo: 'Sidebar Logo',
    header: 'Header',
    fixedHeader: 'Fixed Header',
    tagsView: 'Tags View',
  },
  theme: {
    tips: 'Switching theme',
  },
  dashboardPage: {
    roles: 'Your roles: ',
    hello: 'Hello ',
    user: 'Dashboard for user',
    newVisits: 'New Visits',
    messages: 'Messages',
    purchases: 'Purchases',
    shoppings: 'Shoppings',
    mon: 'Mon',
    tue: 'Tue',
    wed: 'Wed',
    thu: 'Thu',
    fri: 'Fri',
    sat: 'Sat',
    sun: 'Sun',
    expected: 'Expected',
    actual: 'Actual',
    sales: 'Sales',
    admin: 'Administration',
    it: 'Information Technology',
    cs: 'Customer Support',
    dev: 'Development',
    marketing: 'Marketing',
    ab: 'Allocated Budget',
    es: 'Expected Spending',
    as: 'Actual Spending',
    industries: 'Industries',
    technology: 'Technology',
    forex: 'Forex',
    gold: 'Gold',
    forecasts: 'Forecasts',
    wwa: 'WEEKLY WRITE ARTICLES',
    order: 'Order No',
    price: 'Price',
    status: 'Status',
    todo: 'Todo List',
    all: 'All',
    active: 'Active',
    completed: 'Completed',
  },
  documentPage: {
    github: 'Github Repository',
    component: 'Component',
  },
  guidePage: {
    tips: 'It is very useful for first use project users, you can briefly introduce the functions of the project, more reference {link}.',
    open: 'Open Guide',
    prev: 'Previous',
    next: 'Next',
    done: 'Done',
    hamburger: 'Hamburger',
    hamburgerDesc: 'Open and close sidebar',
    breadcrumb: 'Breadcrumb',
    breadcrumbDesc: 'Indicate the current page location',
    search: 'Search',
    searchDesc: 'Page search, quick navigation',
    full: 'Full screen',
    fullDesc: 'Set the page into fullscreen',
    size: 'Size',
    sizeDesc: 'Switch the element size',
    tagsView: 'Tags view',
    tagsViewDesc: 'The history of the page you visited',
  },
  permissionPage: {
    roles: 'Your Roles: ',
    switch: 'Switch roles: ',
    only: 'Only',
    see: 'can see this',
    and: 'and',
    both: 'Both',
    tips: 'In some cases, it is not suitable to use v-permission. For example, el-tab or el-table-column of Element, as well as other dynamically rendered DOM scenes, can only be achieved by manually setting v-if.',
    eg: 'e.g.',
    key: 'Key',
    name: 'Role Name',
    desc: 'Description',
    menu: 'Menu',
    action: 'Action',
    addRole: 'Add Role',
    editRole: 'Edit Role',
    edit: 'Edit',
    delete: 'Delete',
    inputKey: 'Please input role key',
    inputRole: 'Please input role name',
    msg: 'Confirm to remove the role?',
    warning: 'Warning',
    confirm: 'Confirm',
    cancel: 'Cancel',
    deleteSucced: 'Delete successfully!',
    addSucced: 'Add successfully!',
    editSucced: 'Edit successfully!',
    cancel: 'Cancel',
    submit: 'Submit',
  },
  componentPage: {
    tinymce:
      'Rich text is a core feature of the management backend, but it is also a place with many pitfalls, relatively friendly is {link}.',
    markdown: 'Markdown is based on {link}, simply wrapped with Vue.',
    json: 'Json editor is based on {link}.',
    splitPane: 'More reference {link}.',
    platform: 'Platform',
    platformA: 'Platform A',
    platformB: 'Platform B',
    platformC: 'Platform C',
    link: 'Link',
    inputTitle: 'Please input the title',
    releaseTime: 'Release Time',
    publish: 'Publish',
    sticky: 'When the page is scrolled to the preset position will be sticky on the top.',
    backToTop:
      'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner.',
    backToTopDesc:
      'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally.',
    openDialog: 'Open dialog',
    shippingAddress: 'Shipping Address',
    pleaseSelect: 'Please select',
    name: 'Name',
    date: 'Date',
    address: 'Address',
    apple: 'Apple',
    banana: 'Banana',
    orange: 'Orange',
    pear: 'Pear',
    strawberry: 'Strawberry',
    dndList: 'DndList is based on {link}.',
    list: 'List',
    articlePool: 'Article Pool',
    todo: 'Todo',
    working: 'Working',
    done: 'Done',
    buttons: 'Buttons',
    documentation: 'Documentation',
    icons: 'Icons',
    excel: 'Excel',
    table: 'Table',
    form: 'Form',
    theme: 'Theme',
    title: 'Title',
    materialInput: 'Material Input',
    imageHover: 'Image Hover',
    waves: 'Waves',
    hoverText: 'Hover Text',
    share: 'Share',
    lengthLimit: 'The length is between 3 and 5 characters',
    avatar: 'Based on {link}.',
    updateAvatar: 'Update Avatar',
    dropzone: 'Based on {link}.',
  },
  chartPage: {
    lineTitle: 'Requests',
    cmcc: 'CMCC',
    ctcc: 'CTCC',
    cucc: 'CUCC',
    mixTitle: 'Statistics',
    famale: 'famale',
    male: 'male',
    average: 'average',
    month: 'month',
  },
  nestedPage: {
    menu1: 'Menu 1',
    'menu1-1': 'Menu 1-1',
    'menu1-2': 'Menu 1-2',
    'menu1-2-1': 'Menu 1-2-1',
    'menu1-2-2': 'Menu 1-2-2',
    'menu1-3': 'Menu 1-3',
    menu2: 'Menu 2',
  },
  dynamicTablePage: {
    fixed: 'Fixed thead, sorted in thead order',
    unfixed: 'Unfixed thead, sorted in click order',
    apple: 'Apple',
    banana: 'Banana',
    orange: 'Orange',
    fruit: 'Fruit',
  },
  dragTable: {
    index: 'Index',
    datetime: 'DateTime',
    title: 'Title',
    author: 'Author',
    importance: 'Importance',
    pageviews: 'Pageviews',
    status: 'Status',
    action: 'Action',
    published: 'Published',
    draft: 'Draft',
  },
  inlineEditTable: {
    datetime: 'DateTime',
    author: 'Author',
    importance: 'Importance',
    status: 'Status',
    title: 'Title',
    action: 'Action',
    published: 'Published',
    draft: 'Draft',
    edit: 'Edit',
  },
  complexTable: {
    search: 'Search',
    add: 'Add',
    export: 'Export',
    title: 'Title',
    datetime: 'DateTime',
    author: 'Author',
    importance: 'Importance',
    pageviews: 'Pageviews',
    statistics: 'Statistics',
    system: 'System',
    status: 'Status',
    action: 'Action',
    published: 'Published',
    draft: 'Draft',
    edit: 'Edit',
    publish: 'Publish',
    delete: 'Delete',
    cancel: 'Cancel',
    submit: 'Submit',
    inputTitle: 'Please input the title',
    selectDatetime: 'Please select datetime',
    selectStatus: 'Please select status',
    addArticle: 'Add Article',
    editArticle: 'Edit Article',
    addSucced: 'Add successfully!',
    editSucced: 'Edit successfully!',
    deleteSucced: 'Delete successfully!',
    success: 'Success',
  },
  articleCreate: {
    tips: 'Creating and editing pages cannot be cached by keep-alive because keep-alive include does not support caching based on routes, but it is cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly.',
    openComment: 'Open Comment',
    closeComment: 'Close Comment',
    commentOpen: 'Comment: Opened',
    commentClose: 'Comment: Closed',
    platformA: 'Platform A',
    platformB: 'PlatformB',
    platformC: 'Platform C',
    platforms: 'Platforms',
    link: 'Link',
    inputLink: 'Please input the link',
    title: 'Title',
    inputTitle: 'Please input the title',
    author: 'Author:',
    authorPlaceholder: 'Search user',
    publishTime: 'Publish Time:',
    importance: 'Importance:',
    summary: 'Summary:',
    inputSummary: 'Please input the summary',
    inputContent: 'Please input the content',
    uploadImage: 'Please upload image',
    success: 'Success',
    publishSuccess: 'Publish Success',
    saveSuccess: 'Save Success',
    publish: 'Publish',
    draft: 'Draft',
  },
  articleList: {
    index: 'Index',
    datetime: 'DateTime',
    title: 'Title',
    author: 'Author',
    importance: 'Importance',
    status: 'Status',
    action: 'Action',
    published: 'Published',
    draft: 'Draft',
    edit: 'Edit',
  },
  tab: {
    mounted: 'Mounted Times：{times}',
    keepAlive: 'Tab with KeepAlive',
    index: 'Index',
    datetime: 'DateTime',
    title: 'Title',
    author: 'Author',
    importance: 'Importance',
    pageviews: 'Pageviews',
    status: 'Status',
    published: 'Published',
    draft: 'Draft',
  },
  exportExcelPage: {
    index: 'Index',
    author: 'Author',
    title: 'Title',
    datetime: 'DateTime',
    pageviews: 'Pageviews',
    bookName: 'BookName',
    autoWidth: 'AutoWidth',
    bookType: 'BookType',
    export: 'Export',
    inputName: 'Please input book name',
  },
  exportSelectedExcelPage: {
    index: 'Index',
    author: 'Author',
    title: 'Title',
    datetime: 'DateTime',
    pageviews: 'Pageviews',
    exportSelected: 'Export Selected',
    inputName: 'Please input book name',
  },
  exportMergeHeaderExcelPage: {
    index: 'Index',
    name: 'Name',
    gender: 'Gender',
    overview: 'Overview',
    job: 'Job',
    project: 'Project',
    company: 'Company',
    money: 'Money',
    amount: 'Amount',
    profit: 'Profit',
    field: 'Field',
    expense: 'Expense',
    pay: 'Pay',
    otherPay: 'Other Pay',
    duration: 'Duration',
    grade: 'Grade',
    rank: 'Rank',
    education: 'Education',
    address: 'Address',
    domExport: 'Export by DOM',
    dataExport: 'Export by Data',
    inputName: 'Please input book name',
  },
  uploadExcelPage: {
    outOfSize: 'File exceeds size limit {size}',
  },
  exportZip: {
    inputName: 'Please input file name',
    export: 'Export',
    index: 'Index',
    title: 'Title',
    author: 'Author',
    pageviews: 'Pageviews',
    datetime: 'DateTime',
  },
  error401Page: {
    oops: 'OOPS!',
    title: 'You do not have permission to enter this page',
    desc: 'Please contact webmaster if you are not satisfied',
    or: 'Or you can go:',
    back: 'Back to home',
    look: 'Just take a look',
    view: 'Click on me to view the image',
    dialog: 'Just look around',
  },
  error404Page: {
    oops: 'OOPS!',
    right: 'All rights reserved',
    title: 'The webmaster said that you can not enter this page...',
    desc: 'Please check that the URL you entered is correct, or click the button below to return to the homepage.',
    back: 'Back to home',
  },
  pdfPage: {
    tips: 'Download pdf based on window.print().',
    download: 'Download',
    generate: 'Generating PDF',
  },
  themePage: {
    title: 'Theme',
    dark: 'Dark Mode',
    tips: 'Different from the theme-picker, there are two different skinning methods, each with different application scenarios, more reference {link}.',
    default: 'Default',
    plain: 'Plain',
    primary: 'Primary',
    success: 'Success',
    info: 'Info',
    warning: 'Warning',
    danger: 'Danger',
    one: 'Tag 1',
    two: 'Tag 2',
    three: 'Tag 3',
    four: 'Tag 4',
    five: 'Tag 5',
  },
  clipboardPage: {
    functional: 'Functional',
    directive: ' v-clipboard Directive',
    copy: 'Copy',
    succed: 'Copy successfully!',
    failed: 'Copy failed!',
  },
  i18nPage: {
    title: 'Switch Language',
    tips: 'The internationalization of this project is based on vue-i18n.',
    one: 'One',
    two: 'Two',
    three: 'Three',
    default: 'Default',
    primary: 'Primary',
    success: 'Success',
    info: 'Info',
    warning: 'Warning',
    danger: 'Danger',
    name: 'Name',
    date: 'Date',
    address: 'Address',
  },
}
