import img1 from "../assets/reyes.png";
import img2 from "../assets/reyes2.png";
import img3 from "../assets/reyes3.png";
import img4 from "../assets/reyes4.png";
import img5 from "../assets/reyes5.png";
import img6 from "../assets/reyes6.png";

function Reflect() {
  return (
    <section className='min-h-screen px-94 mt-40' id="reflect">
<h1 className="text-4xl font-bold mb-4 justify-self-start text-white">Symbolic Objects and Places</h1>
        <div className=" flex flex-col justify-center items-center mt-10 gap-20">
            {[img1, img2, img3, img4, img5, img6].map((image, idx) => (
                <img key={idx} src={image} alt={`Symbolic object/place ${idx}`} className="w-140 rounded-md" />
            ))}
        </div>
    </section>
  )
}

export default Reflect