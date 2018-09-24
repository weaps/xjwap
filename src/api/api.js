import axios from 'axios'

export function getNavigationData () {
  let url = 'static/mock/getLabelNavigation.json'
  const data = Object.assign({}, {
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getHomListData () {
  let url = 'static/mock/getHomListData.json'
  const data = Object.assign({}, {
    format: 'json'
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
