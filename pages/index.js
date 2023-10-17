import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function Home() {
  const [data, setData] = useState();
  const url = 'https://api.edamam.com/api/recipes/v2/6245fdcbb8c11fc1784df27c4d3426c5?type=public&app_id=f7561bcf&app_key=e61f918b5c75c2049c1858786891441e'

  useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.clear();
        console.log(response)
        setData([response.data.recipe])
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <>
      {
        data && data.map((item, index) => {
          return (
            <div style={styles.container} key={index}>
               {item.calories}
               <Image src={item.image} width={50} height={50}/>
            </div>
          )
        })
      }
    </>
  )
}
