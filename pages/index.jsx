import Image from 'next/image'
import profile from '../public/profile.jpg'

const Button = (props) => {
  const {link = '#', color = 'bg-orange-200', children} = props;
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <button {...props} className={`p-2 text-white w-full text-xl my-1.5 ${color}`}>
      {children}
    </button>
    </a>
  )
}

export default function Home() {
  return (
    <>
     <style jsx global>{`
        body {
          background-image: url('/background.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          height: 100vh;
        }
      `}</style>

   <div>
    <div>
      <Image className='p-1 mx-auto mt-20 mb-5 bg-orange-200 border border-orange-100 rounded-full' src={profile} width={150} height={150}/>
    </div>

    <div>
      <h1 className='text-4xl font-bold text-center text-orange-900'>Putri Angela</h1>
      <p className='my-3 text-center text-orange-900 text-md'>Click the link below to learn more about me!</p>
    </div>
    <div className='max-w-sm mx-auto bg-white shadow-lg'>
      <div className='flex flex-col justify-center p-8'>
        <Button link="https://wahyudi.id">Link 1</Button>
        <Button link="https://wahyudi.id" color="bg-orange-600">Link 2</Button>
        <Button link="https://wahyudi.id">Link 3</Button>
        <Button link="https://wahyudi.id" color="bg-orange-600">Link 4</Button>
      </div>
    </div>
   </div>
   </>
  )
}
