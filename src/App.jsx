import Cards from "./Card";

const App = ()=>{

  return (
    <>
     <h1 className="font-serif text-slate-800 text-3xl text-center mt-2 font-bold border-b-2 mx-80 py-2 border-slate-300">
      React Product Cards.
    </h1>
    <div className="flex flex-wrap mx-auto justify-around">

    <Cards title="Apple Smart Watch" price="790" discPrice="999" discount="70" btnText="Add" rating="4.2" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQOw4JMTQk3nBz4rQzEIvlU6pGQJpkD-ZSQ&s"/>
    <Cards title="Nike Air Jordans" price="499" discPrice="899" discount="50" btnText="Add" rating="4.8" image="https://cdn.luxe.digital/media/20230927084701/best-jordans-of-all-time-ranking-list-luxe-digital-1200x600.jpg"/>
    <Cards title="Apple AirPods Pro Gen-5" price="380" discPrice="799" discount="30" btnText="Add" rating="5" image="https://www.usatoday.com/gcdn/presto/2023/01/12/USAT/9fd91901-c33e-462c-8fa3-bf023efd0b3a-AppleDeals3_1.png?crop=2039,1147,x4,y0"/>
      </div>

    </>
  )
}
export default App ;