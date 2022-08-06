export const parseCookie = (cookie: string, name: string) => {
  let find = cookie.split(';').find((item) => {
    return item.split('=')[0].trim().toUpperCase() === name.toUpperCase()
  })

  return find?.split(`${name}=`)[1].trim()
}

export const parseCookieFromBrowser = (name: string) => {
  return parseCookie(document.cookie, name)
}

export const cookieExpireTime = (hours: number): Date => {
  const date = new Date();
  date.setTime(date.getTime()+(hours*60*60*1000));
  return date
}

export const createCookie = (name: string, value: string, expires = 5): boolean => {
  const expiresTime = cookieExpireTime(expires).toUTCString()
  try {
    document.cookie = `${name}=${value};expires=${expiresTime};`
    return true
  } catch (err) {
    console.log('ERROR IN CREATE COOKIE:', err)
    return false
  }
}

export const generateCookie = (name: string, value: string, expires = 5): string => {
  const expiresTime = cookieExpireTime(expires).toUTCString()
  return `${name}=${value};expires=${expiresTime};`
}

export const removeCookie = (name: string) => {
  document.cookie = `${name}=;Max-Age=-99999999;`
}