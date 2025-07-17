import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles, table } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@heroui/image";
import banner_table from "@/assets/images/banner_table.png";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="fixed inset-0 flex items-center justify-center gap-4">
          <div className="inline-block max-w-xl text-center justify-center">
            <span className={title()}>Encontre uma&nbsp;</span>
            <span className={title({ color: "blue" })}>vaga&nbsp;</span>
            <br />
            <span className={title()}>
              que de match com seus
            </span>
            <span className={title({ color: "blue" })}> interesses e habilidades.&nbsp;</span>
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
      </section>
    </DefaultLayout>
  );
}
