import Image from 'next/image'
import CreateCustomer from './components/CreateCustomer'
import CustomerList from './components/CustomerList'

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="my-5 flex flex-col gap-4 text-center">
        <h1 className="text-center text-2xl font-bold">Gestión de Clientes</h1>
        <CreateCustomer />
        <CustomerList/>
      </div>
    </main>
  )
}
