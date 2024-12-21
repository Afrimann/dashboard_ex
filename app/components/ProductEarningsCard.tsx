import { TopProducts } from '@/constants'
import Image from 'next/image'
export default function TopProduct () {
  return (
    <div className=''>
      {TopProducts.map(product => (
        <div key={product.id}
        className='flex justify-between border-[#EFEFEF] border-b-[1px]'
        >
          <div className='flex items-center gap-2 mb-3'>
            <span className=''>
            <Image
                src={product.icon}
                alt='icon'
                width={40}
                height={40}
                className='object-contain'
            />
            </span>
            <span className='product-details'>
                <h2 className='font-semibold'>{product.name}</h2>
                <h3 className='text-[#868686]'>{product.desc}</h3>
            </span>
          </div>
          <div>
            <span className='font-semibold price'>${product.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
