import { useEffect, useState } from 'react'

const b1 = `${process.env.PUBLIC_URL}/images/landing/b1.png`
const b2 = `${process.env.PUBLIC_URL}/images/landing/b2.png`
const b3 = `${process.env.PUBLIC_URL}/images/landing/b3.png`
const mb1 = `${process.env.PUBLIC_URL}/images/landing/MB1.png`
const mb2 = `${process.env.PUBLIC_URL}/images/landing/MB2.png`
const mb3 = `${process.env.PUBLIC_URL}/images/landing/MB3.png`

export const useFetchHeadersHome = () => {
  const [state, setState] = useState({
    headersData: [],
    loading: true,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const headers = [
          {
            desktop: b1,
            tablet: mb1,
            mobile: mb1,
            link: 'stack',
            chain: 137,
          },
          {
            desktop: b2,
            tablet: mb2,
            mobile: mb2,
            link: 'crystl',
            chain: 137,
          },
          {
            desktop: b3,
            tablet: mb3,
            mobile: mb3,
            link: 'ape',
            chain: 137,
          },
        ]
        setState({
          headersData: headers,
          loading: false,
        })
      } catch (error) {
        console.warn('Unable to fetch data:', error)
      }
    }
    fetchData()
  }, [])

  return state
}

export default {}
