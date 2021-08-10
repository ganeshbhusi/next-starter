import Image from 'next/image';

const CheckImage = () => {
  return (
    <div>
      <Image
        src="/images/profile.jpg"
        width={150}
        height={150}
        alt={'profile'}
        className={'image1'}
        quality={60}
      />
      <style jsx>{`
    .image1{
      border-radius: 20px;
      margin-top: 20px;
    }
  `}</style>
  </div>
  )
}

export default CheckImage;
