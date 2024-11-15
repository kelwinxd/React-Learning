import './components.css'

const Footer = ({items}: any) => {

  const numItems = items.length
  const packedItems = items.filter((i:any) => i.packed).length
  const percentage = packedItems * 100 / numItems
  return (
    <div className='footer'>
      <h3>You've {numItems} items on your list and {packedItems} packed </h3>
      <h3>{percentage.toFixed(0)}% are packed</h3>
    </div>
  )
}

export default Footer