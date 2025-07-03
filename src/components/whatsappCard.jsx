import { Link } from 'react-router';
import { SiWhatsapp } from 'react-icons/si';
export default function WhatsappCard() {
  

  return (
    <Link to={"/whatsapp"}>
    <div
      className="flex items-center p-4 bg-blue-800 hover:bg-blue-950 border border-white  shadow cursor-pointer transition-all duration-200"
    >
      <div className="w-12 h-12 min-w-12 flex items-center justify-center bg-green-500 rounded-xl mr-4 border border-white">
        <SiWhatsapp className='text-white w-8 h-8'/>
      </div>
      <div className="text-lg font-medium text-white">Whatsapp - Message Unknown Contact</div>
    </div>
    </Link>
  );
}
