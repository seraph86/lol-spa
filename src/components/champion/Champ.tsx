import { urls } from "conf/urls";
import style from "components/blocks/Block.module.sass"
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { IChamp } from "interfaces/champion/IChamp";


export function Champ({ champ }: { champ: IChamp }) {


  // const src = urls.champ.img.local + champ.id + '.webp';
  const src = urls.champ.img.net + champ.image.full;

  return (
    <Link to={'/champions/' + champ.id} className={style.block}>

      <LazyLoadImage
        alt={champ.name}
        height={88}
        src={src} // use normal <img> attributes as props
        width={88}
        threshold={10}
        className='z-10 relative rounded-sm'
        wrapperClassName="sceleton shadow-md shadow-neutral-900 rounded-sm"
      />
      <span className='text-center text-sm'>
        {champ.name}
      </span>
    </Link>
  );
}
