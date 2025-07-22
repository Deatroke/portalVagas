import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Tabs, Tab } from "@heroui/tabs";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import { usePathname } from "next/navigation";
import {User} from "@heroui/user";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon, Logo } from "@/components/icons";

export const Navbar = () => {
  const pathname = usePathname();
  const profile = (
      <User
      avatarProps={{
        src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
      }}
      description="Product Designer"
      name="Jane Doe"
    />
  );

  return (
    <HeroUINavbar
      maxWidth="full"
      position="sticky"
      className="fixed bg-transparent backdrop-blur-md bg-opacity-60 rounded-lg shadow-lg w-full lg:w-[80%] xl:w-[70%] mx-auto z-50 mt-4"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">TALENT HUB</p>
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-8">
          <Tabs
            aria-label="Dynamic tabs"
            selectedKey={pathname}
            items={siteConfig.navItems.map((item) => ({
              ...item,
              key: item.href,
            }))}
            disableAnimation={false}
          >
            {(item) => (
              <Tab
                key={item.key}
                title={
                  <NextLink
                    href={item.href}
                    className={clsx(
                      linkStyles({ color: "foreground" }),
                      "data-[active=true]:text-primary data-[active=true]:font-medium",
                      "block px-3 py-2 rounded-lg transition-colors duration-200",
                      "text-sm"
                    )}
                    data-active={pathname === item.href ? "true" : undefined}
                  >
                    {item.label}
                  </NextLink>
                }
                className="text-sm p-0"
              />
            )}
          </Tabs>
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex flex-grow justify-end"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden xl:flex">{profile}</NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {/* {searchInput} */}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
