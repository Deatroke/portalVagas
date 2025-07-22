import { title, subtitle } from "@/components/primitives";
import { Image } from "@heroui/image";
import banner_table from "@/assets/images/banner_table.png";
import DefaultLayout from "@/layouts/default";
import ImageCard from "@/components/cards/ImageCard";
import SimpleInfoCard from "@/components/cards/SimpleInfoCard";
import { siteConfig } from "@/config/site";
import FullInfoCard from "@/components/cards/FullInfoCard";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="inline-block max-w-xl text-center justify-center">
            <span className={title()}>Encontre uma&nbsp;</span>
            <span className={title({ color: "blue" })}>vaga&nbsp;</span>
            <br />
            <span className={title()}>que dê match com seus</span>
            <span className={title({ color: "blue" })}>
              {" "}
              interesses e habilidades.&nbsp;
            </span>
            <div className={subtitle({ class: "mt-4" })}>
              Seu futuro começa aqui!
            </div>
          </div>
          <Image
            src={banner_table.src}
            alt="Job Portal"
            width={500}
            height={500}
            className="mt-6 bg-transparent"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-28">
          {
            siteConfig.imagePaths.map((imagePath, index) => (
              <ImageCard
                key={index}
                altText={imagePath.altText}
                imagePath={imagePath.image}
                title={imagePath.title}
                description={imagePath.description}
              />
            ))
            }
        </div>
        <div className="mt-16">
          <div className="text-center">
            <span className={`${title({size: 'sm'})}`}>Categorias&nbsp;</span>
            <span className={`${title({color: 'blue', size: 'sm'})}`}>populares&nbsp;</span>
            <br />
            <p className={`${subtitle({class: "mt-4"})}`}>Últimas ofertas de trabalho</p>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-8 w-auto h-auto p-4">
            {siteConfig.popularCategories.map((category, index) => (
              <SimpleInfoCard
                key={index}
                title={category.title}
                image={category.image}
                subtitle={category.subtitle}
                altText={category.altText}
              />
            ))}
          </div>
        </div>
        <div className="mt-16">
          <div className="text-center">
            <span className={`${title({size: 'sm'})}`}>Trabalhos mais recentes&nbsp;</span>
            <span className={`${title({color: 'blue', size: 'sm'})}`}>para você&nbsp;</span>
            <br />
            <p className={`${subtitle({class: "mt-4"})}`}>Faça a aplicação de forma mais rápida</p>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-8 w-auto h-auto p-4">
            <FullInfoCard />
            <FullInfoCard />
            <FullInfoCard />
            <FullInfoCard />
            <FullInfoCard />
            <FullInfoCard />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
