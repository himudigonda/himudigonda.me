export const GA_TRACKING_ID = 'G-11G9B92254'

export const pageview = url => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}
