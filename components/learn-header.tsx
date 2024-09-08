"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { capatalise } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export function LearnHeader() {
  const pathname = usePathname();
  const paths = pathname.split('/');

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {paths.map((path, index) => (
          <Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              <BreadcrumbLink href={`/${paths.slice(0, index + 1).join('/')}`}>{path === "" ? "Home" : capatalise(path)}</BreadcrumbLink>
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
