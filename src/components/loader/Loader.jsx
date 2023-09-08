import React from 'react'
import styles from './loader.module.css'

const Loader = () => {
  return (
    <div className='w-full h-full grid place-content-center'>
      <div className={styles.loader}>
        <div className={`${styles.justify_content_center} ${styles.jimu_primary_loading}`}></div>
      </div>
    </div>
  )
}

export default Loader