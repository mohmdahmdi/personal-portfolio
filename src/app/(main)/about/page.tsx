import Image from "next/image";
import aboutImg from "../../../assets/pngs/about.png"

const About = () => {
  return (
    <div className="flex mt-[10%]">
        <Image
        src={aboutImg}
        alt="about image"
        width={300}
        height={700}
        className="mx-20"
        />
      <div className="text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima quod cum ad modi odit explicabo dolores, vero similique architecto officia obcaecati assumenda accusamus, maiores inventore placeat recusandae incidunt rerum ipsum dolorem error. Et eius corporis maiores saepe sapiente voluptatibus, asperiores molestias voluptate illum consequuntur in repellat, odio ex maxime voluptatem veniam reprehenderit atque eum optio voluptas? Recusandae aut placeat maiores tempora neque aliquam voluptate, magni quasi sunt soluta dignissimos eos temporibus natus tempore impedit eligendi sapiente doloribus commodi nemo perspiciatis ut ipsam quisquam. Voluptatem tenetur laudantium tempore recusandae eaque illo! Quis blanditiis, suscipit ducimus aliquid maiores ipsam laudantium nam ea nemo aut tenetur dolor obcaecati reprehenderit illum nostrum ratione est, esse cumque minus pariatur velit sint quas ab. Qui nulla distinctio dignissimos dolore nostrum autem ipsum dolor quas nobis illo. Molestias unde aliquam obcaecati odio alias dignissimos iure laudantium omnis dolorum nesciunt, dolor eaque distinctio incidunt praesentium sit veritatis, impedit quam architecto eveniet atque eum vitae. Totam esse, aut ipsum et cum voluptatibus sequi culpa excepturi aliquam? Expedita tempore rerum, excepturi voluptates, cum recusandae iusto ut vero repudiandae quidem quasi dignissimos pariatur in quis exercitationem veritatis qui nesciunt ex temporibus eum, quae dolorem voluptatibus doloribus iste! Assumenda rem cumque quidem.</div>
    </div>
  );
};

export default About;
