import axios from 'axios'

export function getNavigationData () {
  let url = 'static/mock/getLabelNavigation.json'
  const data = Object.assign({}, {
    // platform: 'yqq', // 加引号
    // hostUin: 0,
    // sin: 0,
    // ein: 29,
    // sortId: 5,
    // needNewCode: 0,
    // categoryId: 10000000,
    // rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
