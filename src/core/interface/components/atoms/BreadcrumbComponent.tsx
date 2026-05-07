import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BreadcrumbData {
  label: string;
  href: string;
}

interface BreadCrumbDataProps {
  items: BreadcrumbData[];
  currentPage: string;
}

export function BreadcrumbBasic({ items, currentPage }: BreadCrumbDataProps) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.flatMap((element) => [
          <BreadcrumbItem key={`item-${element.href}`}>
            <BreadcrumbLink href={element.href}>{element.label}</BreadcrumbLink>
          </BreadcrumbItem>,
          <BreadcrumbSeparator key={`sep-${element.href}`} />,
        ])}
        <BreadcrumbItem>
          <BreadcrumbPage>{currentPage}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}
