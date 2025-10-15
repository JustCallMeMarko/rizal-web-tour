import img1 from "../assets/Berlin/1.png";
import img2 from "../assets/Berlin/2.png";
import img3 from "../assets/Berlin/3.png";
import img4 from "../assets/Berlin/4.png";
import img5 from "../assets/Berlin/5.png";
import img6 from "../assets/Berlin/6.png";
function Places() {
  return (
    <section className='min-h-screen px-94 pt-60' id="symbolism">
        <h1 className="text-4xl font-bold mb-4 justify-self-start text-white">Symbolic Objects and Places</h1>
        <div className=" flex flex-col justify-center items-center mt-10 gap-20">
            {[img1, img2, img3, img4, img5, img6].map((image, idx) => (
                <img key={idx} src={image} alt={`Symbolic object/place ${idx}`} className="w-140 rounded-md drop-shadow-amber-100 drop-shadow-2xl" />
            ))}
        </div>
    </section>
  )
}

export default Places   
