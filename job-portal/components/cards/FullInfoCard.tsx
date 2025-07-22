import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import location from "@/assets/images/location.png";
import { BookmarkIconOutline, BookmarkIconFilled } from "../icons";
import { Button } from "@heroui/button";

export default function FullInfoCard() {
  return (
    <Card className="max-w-[400px] p-1">
      <CardHeader className="flex gap-3">
        <Image
          alt="heroui logo"
          height={70}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={70}
        />
        <div className="flex flex-col">
          <p className="text-small text-default-500">HeroUI</p>
          <p className="text-lg">Web Designer</p>

          <div className="flex items-center gap-2 mt-2">
            <Chip variant="flat" color="primary" radius="sm">
              Figma
            </Chip>
            <Chip variant="flat" color="primary" radius="sm">
              Webflow
            </Chip>
            <Chip variant="flat" color="primary" radius="sm">
              Adobe XD
            </Chip>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div className="flex justify-between align-middle">
          <div className="flex items-center gap-2">
            <Image alt="Location" height={30} src={location.src} width={30} />
            <p className="text-small text-default-500">Michigan, USA</p>
          </div>
          <p className="text-small text-default-500">1h atrás</p>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-between">
          <Link
            isExternal
            showAnchorIcon
            href="https://github.com/heroui-inc/heroui"
          >
            Ver vaga
          </Link>
          <Button
            variant="flat"
            isIconOnly
          >
            <BookmarkIconOutline />
          </Button>
        
      </CardFooter>
    </Card>
  );
}
