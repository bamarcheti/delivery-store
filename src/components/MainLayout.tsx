import logo from '../assets/logo-gruposix.svg';
import { Cart } from './Cart';

interface Props {
  children: React.ReactNode;
}

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-col h-full'>
      <header className="bg-black shadow-lg w-full">
        <div className="container mx-auto px-6 py-4 flex items-center">
          <div className="w-28">
            <img src={logo} alt="Grupo Six Logo" className="w-auto h-auto" />
          </div>
        </div>
      </header>

      <div className="flex flex-1 container mx-auto">
        <main className="grow w-full px-6 py-6">{children}</main>

        <div className="w-1/4 bg-gray-100 p-4">
          <Cart />
        </div>
      </div>
    </div>
  );
};
