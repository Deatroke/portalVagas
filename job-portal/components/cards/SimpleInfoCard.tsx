import {Card, CardHeader} from "@heroui/card";
import {Image} from "@heroui/image";
import { SimpleInfoCardProps } from "@/types/props/SimpleInfoCardProps";

export default function SimpleInfoCard(props: SimpleInfoCardProps) {
  return (
    <Card className="max-w-[290px]">
      <CardHeader className="flex gap-3">
        <Image
          alt={props.altText}
          height={40}
          radius="sm"
          src={props.image}
          width={50}
        />
        <div className="flex flex-col w-full">
          <p className="text-md">{props.title}</p>
          <p className="text-small text-default-500">{props.subtitle}</p>
        </div>
      </CardHeader>
    </Card>
  );
}
