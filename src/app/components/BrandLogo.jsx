// components/BrandLogo.jsx
export default function BrandLogo() {
  return (
    <div className="flex items-center">
      <img 
      
        src="/logo.svg"
        width={48}
        height={48}
        alt="ALOTER REALTY LTD" 
        className="h-12 mr-3"
      />
      <div>
        <h1 className="text-xl font-bold">ALOTER REALTY LTD</h1>
        <p className="text-sm text-gray-600">Turning your realty fantasies into reality</p>
      </div>
    </div>
  )
}