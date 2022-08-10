import { useState, useEffect } from 'react';
import Head from 'next/head'
import { Cloudinary } from '@cloudinary/url-gen';


import Layout from '@components/Layout';
import Container from '@components/Container';
import Button from '@components/Button';

import videos from '@data/videos';

import styles from '@styles/Home.module.scss'

const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
  }
});

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Videos</title>
        <meta name="description" content="All of my cool videos." />
      </Head>

      <Container>
        <h1 className="sr-only">My Videos</h1>

        <h2 className={styles.header}>Videos</h2>

        <ul className={styles.videos}>
          {videos.map(video => {
            return (
              <li key={video.id}>
                <video
                  controls
                  width="100%"
                  src={cld.video(video.id).delivery('q_auto').format('auto').toURL()}
                />

                <h3 className={styles.videoTitle}>
                  <a href={video.link} rel="noreferrer">
                    { video.title }
                    </a>
                </h3>
              </li>
            )
          })}
        </ul>
      </Container>
    </Layout>
  )
}