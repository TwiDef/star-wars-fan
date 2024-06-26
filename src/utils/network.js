import { PARAM_PAGE } from "./constants";

export const getApiResource = async (url) => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.error('Could not fetch.', res.status)
      return false
    }

    return await res.json()
  } catch (error) {
    console.error('Could not fetch.', error.message)
    /* return false */
  }
}

export const getPageId = (url) => {
  const pos = url.lastIndexOf(PARAM_PAGE)
  const id = url.slice(pos + PARAM_PAGE.length, url.length)
  return +id
}