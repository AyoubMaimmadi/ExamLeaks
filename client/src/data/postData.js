const postData = [
  {
    id: 1183423421,
    title: 'Languages & Compilers',
    category: 'CSC',
    name: 'CSC 3300',
    img: './images/csc.png',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 2183423421,
    title: 'Computer Architecture',
    category: 'CSC',
    name: 'CSC 3300',
    img: './images/csc.png',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 3183423421,
    title: 'Accounting Principles 1',
    category: 'BA',
    name: 'BA 3301',
    img: './images/ba.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 4183423421,
    title: 'Accounting Principles 2',
    category: 'BA',
    name: 'BA 3302',
    img: './images/ba.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 5183423421,
    title: 'Works In Literature	',
    category: 'SHSS',
    name: 'SHSS 3300',
    img: './images/shss.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 6183423421,
    title: 'Calculus 1',
    category: 'EMS',
    name: 'IMS 3300',
    img: './images/ims.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 7183423421,
    title: 'Software Engineering',
    category: 'CSC',
    name: 'CSC 3300',
    img: './images/csc.png',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 8183423421,
    title: 'Financial Accounting',
    category: 'BA',
    name: 'BA 3300',
    img: './images/ba.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
  {
    id: 9183423421,
    title: 'Linear Algebra',
    category: 'EMS',
    name: 'IMS 3300',
    img: './images/ims.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 10183423421,
    title: 'Philosophical Thoughts',
    category: 'SHSS',
    name: 'SHSS 3300',
    img: './images/shss.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 11183423421,
    title: 'Computer Architecture',
    category: 'CSC',
    name: 'CSC 3300',
    img: './images/csc.png',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 12183423421,
    title: 'Accounting Principles 1',
    category: 'BA',
    name: 'BA 3300',
    img: './images/ba.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 13183423421,
    title: 'Accounting Principles 2',
    category: 'BA',
    name: 'BA 3300',
    img: './images/ba.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 14183423421,
    title: 'Works In Literature	',
    category: 'SHSS',
    name: 'SHSS 3300',
    img: './images/shss.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 15183423421,
    title: 'Calculus 1',
    category: 'EMS',
    name: 'IMS 3300',
    img: './images/ims.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 16183423421,
    title: 'Software Engineering',
    category: 'CSC',
    name: 'CSC 3300',
    img: './images/csc.png',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 17183423421,
    title: 'Financial Accounting',
    category: 'BA',
    name: 'BA 3300',
    img: './images/ba.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 18183423421,
    title: 'Linear Algebra',
    category: 'EMS',
    name: 'IMS 3300',
    img: './images/ims.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 1001183423421,
    title: 'Languages & Compilers',
    category: 'CSC',
    name: 'CSC 3300',
    img: './images/csc.png',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 1001834234221,
    title: 'Works In Literature	',
    category: 'SHSS',
    name: 'SHSS 3300',
    img: './images/shss.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 1183423420031,
    title: 'Calculus 1',
    category: 'EMS',
    name: 'IMS 3300',
    img: './images/ims.jpg',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 1001834234241,
    title: 'Software Engineering',
    category: 'CSC',
    name: 'CSC 3300',
    img: './images/csc.png',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 1001834234251,
    title: 'dolar sit amit',
    category: 'CSC',
    name: 'CSC 3300',
    img: './images/csc.png',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  },
  {
    id: 1018342342016,
    title: 'Agile Software Engineering',
    category: 'CSC',
    name: 'FOO 4400',
    img: './images/csc.png',
    link: 'https://drive.google.com/file/d/1H3GIIQK1Bc9VBAj82jlHTTn20w096P9N/view',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
  }
]

export default postData
