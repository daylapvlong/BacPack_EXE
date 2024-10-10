import { useState } from 'react'
import { ShoppingCart, Minus, Plus, Store, Truck } from 'lucide-react'

export default function Shopping() {
  type Amount = '300gr' | '500gr' | '1kg';

  const [quantity, setQuantity] = useState(1) 
  const [selectedAmount, setSelectedAmount] = useState<Amount>('300gr');
  const [selectedImage, setImageSource] = useState('/assets/product/product1.png');

  const amountPrices = { '300gr': '280.000', '500gr': '450.000', '1kg': '820.000' }

  const calculatePrice = amountPrices[selectedAmount]
  const handleAmountChange = (amount: string) => {
    if (['300gr', '500gr', '1kg'].includes(amount)) {
      setSelectedAmount(amount as Amount);
    }
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  return (
    <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
      <div className="grid md:grid-cols-2 gap-8 bg-background border-primary rounded-md border-2 p-6">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative">
            <img
              src={selectedImage}
              alt={`${selectedImage}`}
              className="w-[700px] h-[450px] object-cover rounded-lg"
            />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {['/assets/product/product1.png', '/assets/product/product2.png', '/assets/product/product3.png', '/assets/product/product4.png', '/assets/product/product5.png'].map((src) => (
              <img
                key={src}
                src={src}
                alt={`Image for ${src}`}
                onClick={() => setImageSource(src)}
                className="w-[130px] h-[90px] aspect-square object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6 mx-12">
          <div className="flex items-baseline ">
            <h1 className="text-4xl font-bold">Thịt trâu gác bếp Tây Bắc</h1>
          </div>

          <div className="flex items-baseline space-x-2">
            <span className="text-3xl font-bold text-primary">{calculatePrice} VND</span>
          </div>
          <ul>
            {selectedAmount === '300gr' && (
              <>
                <li className="text-gray-600"><strong>Gói cơ bản:</strong> Đây là lựa chọn tuyệt vời cho những ai muốn thưởng thức sản phẩm chất lượng mà không cần quá cầu kỳ.</li>
                <li className="text-gray-600"><strong>Túi hút chân không:</strong> Sản phẩm được đóng gói trong túi hút chân không an toàn, giúp bảo quản tốt hơn và dễ dàng mang theo.</li>
                <li className="text-gray-600"><strong>Thịt cao cấp từ địa phương:</strong> Thịt được chọn lọc kỹ lưỡng từ những nhà sản xuất địa phương, đảm bảo chất lượng và độ tươi ngon.</li>
                <li className="text-gray-600"><strong>Lý tưởng cho bữa ăn nhẹ cá nhân:</strong> Gói này rất phù hợp cho những bữa ăn nhẹ khi di chuyển hoặc khi bạn cần bổ sung năng lượng nhanh chóng trong suốt cả ngày.</li>
              </>
            )}  
            {selectedAmount === '500gr' && (
                <>
                    <li className="text-gray-600"><strong>Gói bán chạy nhất:</strong> Đây là lựa chọn hàng đầu cho những ai yêu thích sản phẩm chất lượng và được ưa chuộng nhất.</li>
                    <li className="text-gray-600"><strong>Túi hút chân không:</strong> Sản phẩm được đóng gói trong túi hút chân không an toàn, giúp bảo quản tốt hơn và tạo cảm giác tinh tế.</li>
                    <li className="text-gray-600"><strong>Thịt cao cấp từ địa phương:</strong> Thịt được chọn lọc kỹ lưỡng từ những nhà sản xuất địa phương, đảm bảo chất lượng và độ tươi ngon.</li>
                    <li className="text-gray-600"><strong>Hoàn hảo để chia sẻ hoặc làm quà tặng:</strong> Gói này rất phù hợp để chia sẻ với bạn bè hoặc người thân, hoặc dùng làm món quà ý nghĩa trong các dịp đặc biệt.</li>
                </>
            )}
            
            {selectedAmount === '1kg' && (
                <>
                    <li className="text-gray-600"><strong>Gói tiết kiệm:</strong> Đây là lựa chọn hoàn hảo cho những ai muốn tiết kiệm chi phí mà vẫn thưởng thức sản phẩm chất lượng.</li>
                    <li className="text-gray-600"><strong>Bao bì sang trọng:</strong> Sản phẩm được đóng gói trong bao bì tinh tế và sang trọng, tạo ấn tượng tốt cho người nhận.</li>
                    <li className="text-gray-600"><strong>Thịt cao cấp từ địa phương:</strong> Thịt được chọn lọc kỹ lưỡng từ những nhà sản xuất địa phương, đảm bảo chất lượng và độ tươi ngon.</li>
                    <li className="text-gray-600"><strong>Phù hợp cho gia đình hoặc các buổi tụ họp lớn:</strong> Gói này rất lý tưởng cho các bữa ăn gia đình hoặc các buổi tiệc, mang lại sự tiện lợi và đầy đủ dinh dưỡng cho mọi người.</li>
                </>
            )}
          </ul>

          {/* amount Options */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Amount</label>
            <div className="flex space-x-2">
              {['300gr', '500gr', '1kg'].map((amount) => (
                <label key={amount} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="amount"
                    value={amount}
                    checked={selectedAmount === amount}
                    onChange={() => handleAmountChange(amount)}
                    className="sr-only"
                  />
                  <span className={`w-6 h-6 rounded-full border ${selectedAmount === amount ? 'border-primary ring-2 ring-primary' : 'border-gray-300'}`} style={{backgroundColor: amount.toLowerCase()}}></span>
                  <span>{amount}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md h-full">
              <button onClick={decrementQuantity} className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-12 text-center">{quantity}</span>
              <button onClick={incrementQuantity} className="px-2 py-1 text-gray-600 hover:bg-gray-100">
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <button className="flex-1 bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
              <ShoppingCart className="inline-block mr-2 h-4 w-4" /> Order now!
            </button>
          </div>

          <div className="bg-white border rounded-lg p-4 space-y-2">
            <div className="flex items-center space-x-2">
              <Store className="h-5 w-5 text-gray-600" />
              <span className="font-semibold">
              <a
                aria-label="facebook"
                href={'https://www.facebook.com/BacPackTayBac'}
                target="_blank"
                rel="noreferrer"
              >
                BacPack Official Store
              </a>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Truck className="h-5 w-5 text-gray-600" />
              <span>Free Shipping</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}