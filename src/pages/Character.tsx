import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";
import image6 from "../assets/6.png";
import image7 from "../assets/7.png";
import image8 from "../assets/8.png";
import image9 from "../assets/9.png";
import image3 from "../assets/3.png";
import image10 from "../assets/10.png";
const character = [
  {
    name: "Crisostomo Ibarra",
    image: image1,
    description:
      "A young, idealistic Filipino educated in Europe. He symbolizes hope for reform and the educated class, but faces the harsh reality of colonial oppression.",
    trivia:
      "His full name, Crisostomo, means 'golden mouth' in Greek, hinting at his potential as an eloquent speaker and leader.",
  },
  {
      name: "Maria Clara",
      image: image2,
      description:
      "Known as the ideal Filipina, she represents innocence, purity, and also the struggles of women under conservative society.",
      trivia:
      "The traditional Filipino dress 'Maria Clara gown' is named after her.",
    },
    {
      name: "Padre Damaso",
      image: image3,
      description:
        "A domineering friar who represents the abusive power of the Church. His arrogance and cruelty reflect the corruption of colonial clergy.",
      trivia:
        "known for his loud voice and overbearing personality.",
    },
  {
    name: "Elias",
    image: image4,
    description:
      "A revolutionary spirit who symbolizes sacrifice and the voice of the oppressed. He represents the struggle of the common Filipino longing for freedom.",
    trivia:
      "His background reveals a tragic history of suffering and injustice inflicted upon his family by the Spanish colonial authorities.",
  },
  {
    name: "Sisa ",
    image: image5,
    description:
      "A mother who loses her sanity after her children are taken away. She symbolizes the suffering motherland under colonial abuse.",
    trivia:
      "often seen wandering the streets, desperately searching for her children.",
  },
  {
    name: "Pilosopong Tasyo",
    image: image6,
    description:
      "An old, wise man who provides counsel to Crisostomo Ibarra. He represents enlightenment and reason, but is often dismissed as eccentric by the community.",
    trivia:
      "Known for his philosophical views and critical observations of society.",
  },
  {
    name: "Basilio",
    image: image7,
    description:
      "Symbolizes the hopes and struggles of the oppressed Filipino youth under Spanish colonial rule. He embodies the youth's potential and their suffering under colonial injustices.",
    trivia:
      "Basilio's journey, from a young, impoverished boy to a medical student, showcases the potential for growth and self-improvement even amidst challenging circumstances.",
  },
  {
    name: "Crispin",
    image: image8,
    description:
      "The younger brother of Basilio, Crispin is a young sacristan who works in the church to help support his family. He is a symbol of innocence victimized by the corrupt and abusive colonial system.",
    trivia:
      "Crispin is falsely accused of stealing money from the church, leading to his torture and presumed death, which ultimately drives his mother, Sisa, to madness.",
  },
  {
    name: "Don Rafael Ibarra",
    image: image9,
    description:
      "Don Rafael Ibarra was Crisostomo Ibarra's father, a wealthy and respected man in San Diego.",
    trivia:
      "Don Rafael was imprisoned and died after being accused of heresy and subversion by Padre Damaso.",
  },
  {
    name: "Don Santiago",
    image: image10,
    description:
      "Don Santiago 'Kapitan Tiago' Delos Santos is a wealthy Filipino socialite and a well-respected member of the country's elite in Noli Me Tangere.",
    trivia:
      "Kapitan Tiago is not Maria Clara's biological father; Padre Damaso had an affair with his wife, Doña Pia Alba, before she died in childbirth.",
  },
];
function Character() {
  return (
    <section className="min-h-screen px-8 md:px-94 pt-60" id="character">
        <h1 className="text-4xl font-bold mb-4 justify-self-start text-white">Character Stops</h1>
      <div className="flex flex-col gap-20 mt-20">
        {character.map((char, idx) => (
          <div key={idx} className={`${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse md:text-end'} flex flex-col`}>
            <img src={char.image} alt={char.name} className="w-full mb-4 md:w-70 rounded-xs" />
            <div className="flex flex-col mx-4">
              <h2 className="text-xl font-semibold text-white">{char.name}</h2>
              <p className="text-xs md:text-sm text-white mb-6 max-w-92 ">{char.description}</p>
              <h2 className="text-xl font-semibold text-white">Trivia</h2>
              <p className="text-xs md:text-sm text-white max-w-92 ">{char.trivia}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Character;
