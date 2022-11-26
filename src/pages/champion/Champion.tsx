import { InnerHTML } from "components/blocks/InnerHTML";
import { urls, ddV } from "conf/urls";
import { useParams } from "react-router-dom";
import { useGetDataQuery } from "api/lol";
import { IChampion } from "interfaces/champion/IChampion";
import { NotFound } from "pages/NotFound";
import { useSelector } from "react-redux";
import { RootState } from "store";


export const Champion = () => {
  const { id } = useParams();

  const { version: { version }, language: { language } } = useSelector((state: RootState) => state);

  const { data, isLoading } = useGetDataQuery(['champion/' + id, version, language]);

  const champ: IChampion = data?.data[id!];

  // const src = urls.champ.img.local + id + '.webp';
  const src = champ && urls.champ.img.net + champ.image.full;

  if (isLoading) {
    return (
      <p>loading...</p>
    )
  }

  return (
    <>
      {champ ?
        <div>
          <h1>{id}</h1>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-4">
            <img src={src} alt="" />
            <p>{champ.blurb}</p>
          </div>

          <Cart
            src={`${ddV}img/passive/${champ.passive.image.full}`}
            name={champ.passive.name}
            description={champ.passive.description}
          />

          {champ.spells.map(s => (
            <Cart key={s.id}
              src={`${ddV}img/spell/${s.image.full}`}
              name={s.name}
              description={s.description}
            />
          ))}
        </div> :
        <NotFound />}
    </>
  );
}

const Cart = ({ src, name, description }: { src: string, name: string, description: string }) => {
  return (
    <div className="flex items-start gap-4 mb-4">
      <img className="mt-2" src={src} alt="" />
      <div>
        <h2 className="text-xl font-medium mb-1">{name}</h2>
        <InnerHTML html={description} tag='p' />
      </div>
    </div>
  )
};