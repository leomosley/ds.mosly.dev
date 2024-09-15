import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CardContent, Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function NavCard({
  title,
  description,
  href,
  icon,
}: {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center space-y-4 p-6">
        {icon}
        <h3 className="text-2xl font-bold text-center">{title}</h3>
        <p className="text-gray-500 dark:text-gray-400 text-center">
          {description}
        </p>
        <Link href={href} prefetch={false}>
          <Button variant="outline" className="w-full">
            Explore {title}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
