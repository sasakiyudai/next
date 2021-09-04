import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Post from '../components/post/post'
import { getAllPostData } from '../lib/posts'

const Home: NextPage = ({posts}) => {
  return (
    <div>
      <Head>
        <title>MU</title>
      </Head>
      <h1 className="text-9xl flex justify-center h-screen items-center font-bold">
        MU
      </h1>
      <div className="mb-10 p-3 border rounded">
        <Image
          className="object-cover rounded"
          src="/top.png"
          alt="top"
          width={1280}
          height={500}
        />
      </div>
      <div className="flex justify-center flex-col items-center mb-10">
        <div className="text-lg mb-3">POSTS</div>
        <div className="border w-14"></div>
      </div>
      <div className="flex flex-wrap -m-4 mb-5">
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </div>
    </div>
  )
}

export default Home


export async function getStaticProps() {
  const posts = await getAllPostData()
  return {
    props: { posts },
    revalidate: 3,
  }
}