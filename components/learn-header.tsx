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
    <Breadcrumb className="mb-2">
      <BreadcrumbList>
        {paths.map((path, index) => (
          <Fragment key={index}>
            {index > 0 && <BreadcrumbSeparator />}
            <BreadcrumbItem>
              <BreadcrumbLink
                href={path === "" ? '/' : `${paths.slice(0, index + 1).join('/')}`}
                className="text-base/relaxed"
              >
                {path === "" ? "Home" : capatalise(path)}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
