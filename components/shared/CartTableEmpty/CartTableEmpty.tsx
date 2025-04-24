import Image from 'next/image';
import EmptyCartImage from '@/public/img/cart/empty-cart.png';

export default function CartTableEmpty() {
  return (
    <tbody>
      <tr>
        <td className="w-full flex justify-center items-center">
          <Image src={EmptyCartImage} alt="empty cart" />
        </td>
      </tr>
    </tbody>
  );
}
